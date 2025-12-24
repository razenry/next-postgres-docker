import crypto from "crypto";

export function generateRefreshToken() {
  return crypto.randomBytes(64).toString("hex");
}

export function getRefreshTokenExpiry() {
  const days =
    Number(process.env.REFRESH_TOKEN_EXPIRES_IN_DAYS) || 7;

  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  return expires;
}
