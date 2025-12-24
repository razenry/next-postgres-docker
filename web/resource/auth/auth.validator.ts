export function validateRegister(body: any) {
  if (
    !body.name ||
    !body.username ||
    !body.email ||
    !body.password
  ) {
    throw new Error("All fields are required");
  }

  if (body.password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }
}

export function validateLogin(body: any) {
  if (!body.email || !body.password) {
    throw new Error("Email dan password wajib diisi");
  }
}
