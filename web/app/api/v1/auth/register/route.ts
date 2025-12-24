import { AuthService } from "@/resource/auth/auth.service";
import { validateRegister } from "@/resource/auth/auth.validator";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    validateRegister(body);

    const user = await AuthService.register(body);

    return NextResponse.json(
      {
        message: "Register success",
        user,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
