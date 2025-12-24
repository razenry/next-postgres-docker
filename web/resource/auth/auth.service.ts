
import { comparePassword, hashPassword } from "@/lib/password";
import { UserRepository } from "../user/user.repository";
import { signToken } from "@/lib/jwt";

export class AuthService {
  static async register(data: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    // cek email
    const emailExists = await UserRepository.findByEmail(
      data.email
    );
    if (emailExists) {
      throw new Error("Email already registered");
    }

    // cek username
    const usernameExists =
      await UserRepository.findByUsername(data.username);
    if (usernameExists) {
      throw new Error("Username already taken");
    }

    // hash password
    const hashedPassword = await hashPassword(data.password);

    // simpan user
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

    const token = signToken({
      userId: user.id,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    };
  }
}
