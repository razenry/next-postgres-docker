import { getAuthUser } from "@/lib/auth";
import { UserRepository } from "@/resource/user/user.repository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const auth = getAuthUser(req);

    const user = await UserRepository.findById(auth.userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Success",
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }
}
