import { UserService } from "@/service/user/user.service";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await UserService.getUsers();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await UserService.createUser(body.email, body.name);
    return NextResponse.json(user, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
