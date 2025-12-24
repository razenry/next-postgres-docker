import { comparePassword, hashPassword } from "@/lib/password";
import { UserRepository } from "../user/user.repository";
import { signToken } from "@/lib/jwt";
import {
  generateRefreshToken,
  getRefreshTokenExpiry,
} from "@/lib/refresh-token";
import { RefreshTokenRepository } from "../token/refresh-token.repository";

export class AuthService {
  static async register(data: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    const emailExists = await UserRepository.findByEmail(
      data.email
    );
    if (emailExists) {
      throw new Error("Email already registered");
    }

    const usernameExists =
      await UserRepository.findByUsername(data.username);
    if (usernameExists) {
      throw new Error("Username already taken");
    }

    const hashedPassword = await hashPassword(data.password);

    return UserRepository.create({
      ...data,
      password: hashedPassword,
    });
  }

  static async login(email: string, password: string) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email atau password salah");
    }

    const isPasswordValid = await comparePassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Email atau password salah");
    }

    // Access Token
    const accessToken = signToken({
      userId: user.id,
      email: user.email,
    });

    // Refresh Token
    const refreshToken = generateRefreshToken();

    await RefreshTokenRepository.create({
      token: refreshToken,
      userId: user.id,
      expiresAt: getRefreshTokenExpiry(),
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    };
  }

  static async refresh(refreshToken: string) {
    const storedToken =
      await RefreshTokenRepository.findByToken(refreshToken);

    if (!storedToken) {
      throw new Error("Invalid refresh token");
    }

    if (storedToken.expiresAt < new Date()) {
      await RefreshTokenRepository.delete(refreshToken);
      throw new Error("Refresh token expired");
    }

    // rotate token (security best practice)
    await RefreshTokenRepository.delete(refreshToken);

    const newRefreshToken = generateRefreshToken();

    await RefreshTokenRepository.create({
      token: newRefreshToken,
      userId: storedToken.userId,
      expiresAt: getRefreshTokenExpiry(),
    });

    const newAccessToken = signToken({
      userId: storedToken.user.id,
      email: storedToken.user.email,
    });

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  static async logout(refreshToken: string) {
    await RefreshTokenRepository.delete(refreshToken);
  }
}
