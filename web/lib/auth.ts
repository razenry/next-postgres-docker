import { verifyToken } from "@/lib/jwt";
import { JwtPayload } from "jsonwebtoken";

export interface AuthPayload extends JwtPayload {
  userId: number;
  email: string;
}

export function getAuthUser(req: Request): AuthPayload {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    throw new Error("Authorization header missing");
  }

  if (!authHeader.startsWith("Bearer ")) {
    throw new Error("Invalid authorization format");
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const payload = verifyToken(token) as AuthPayload;
    return payload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
