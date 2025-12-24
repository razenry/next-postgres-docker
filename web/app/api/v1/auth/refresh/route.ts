import { AuthService } from "@/resource/auth/auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token required" },
        { status: 400 }
      );
    }

    const tokens = await AuthService.refresh(refreshToken);

    return NextResponse.json(tokens);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
