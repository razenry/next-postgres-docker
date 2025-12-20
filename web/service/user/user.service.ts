import { UserRepository } from "@/repository/user/user.repository";

export class UserService {
  static async createUser(email: string, name?: string) {
    const existing = await UserRepository.findByEmail(email);
    if (existing) {
      throw new Error("Email already registered");
    }

    return UserRepository.create({ email, name });
  }

  static getUsers() {
    return UserRepository.findAll();
  }

  static async deleteUser(id: number) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return UserRepository.delete(id);
  }
}