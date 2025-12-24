import prisma from "@/lib/prisma";

export class UserRepository {
  static findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        profilePicture: true,
      },
    });
  }

  static findByUsername(username: string) {
    return prisma.user.findUnique({
      where: { username },
    });
  }

  static create(data: {
    name: string;
    username: string;
    email: string;
    password: string;
  }) {
    return prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
      },
    });
  }
}
