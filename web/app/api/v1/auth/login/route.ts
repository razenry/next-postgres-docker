import { AuthService } from "@/resource/auth/auth.service";
import { validateLogin } from "@/resource/auth/auth.validator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    validateLogin(body);

    const { accessToken, refreshToken , user } = await AuthService.login(
      body.email,
      body.password
    );

    return NextResponse.json({
      message: "Login berhasil",
      refreshToken,
      token: accessToken,
      user,
    });

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
