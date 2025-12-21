import prisma from "@/lib/prisma";

export class UserRepository {
  static findAll() {
    return prisma.user.findMany({
      include: { posts: true },
    });
  }

  static findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  static findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static create(data: { email: string; name?: string }) {
    return prisma.user.create({ data });
  }

  static delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}
