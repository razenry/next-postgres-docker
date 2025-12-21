import { NextResponse } from "next/server";
import { AppError } from "./errors";

export function handleError(error: unknown) {
  if (error instanceof AppError) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }

  console.error("Unhandled error:", error);

  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}
