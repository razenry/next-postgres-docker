import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const signOptions: SignOptions = {
  expiresIn: "7d",
};

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET, signOptions);
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
}
