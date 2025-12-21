import { NextResponse } from "next/server";
import { handleError } from "@/lib/handle-error";
import { UserService } from "@/resource/user/user.service";
import { CreateUserSchema } from "@/resource/user/user.dto";

export async function GET() {
  try {
    const users = await UserService.getUsers();
    return NextResponse.json(users);
  } catch (e) {
    return handleError(e);
  }
}

export async function POST(req: Request) {
  try {
    const body = CreateUserSchema.parse(await req.json());
    const user = await UserService.createUser(body);
    return NextResponse.json(user, { status: 201 });
  } catch (e) {
    return handleError(e);
  }
}
