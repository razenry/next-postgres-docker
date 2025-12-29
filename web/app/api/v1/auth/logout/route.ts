import { AuthService } from "@/resource/auth/auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { refreshToken } = await req.json();
  
    if (refreshToken) {
      await AuthService.logout(refreshToken);
    }
  
    return NextResponse.json({ message: "Logout success" });
  } catch (error: any) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
