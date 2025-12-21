
import { ConflictError, NotFoundError } from "@/lib/errors";
import { CreateUserDTO } from "./user.dto";
import { UserRepository } from "./user.repository";

export class UserService {
  static async createUser(data: CreateUserDTO) {
   
    const email = data.email.trim().toLowerCase();

    const exists = await UserRepository.findByEmail(email);
    if (exists) {
      throw new ConflictError("Email already registered");
    }

    return UserRepository.create(data);
  }

  static async deleteUser(id: number) {
    const user = await UserRepository.findById(id);
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return UserRepository.delete(id);
  }

  static getUsers() {
    return UserRepository.findAll();
  }
}
