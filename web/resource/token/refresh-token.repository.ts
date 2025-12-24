import prisma from "@/lib/prisma";

export class RefreshTokenRepository {
  static create(data: { token: string; userId: number; expiresAt: Date }) {
    return prisma.refreshToken.create({
      data,
    });
  }

  static findByToken(token: string) {
    return prisma.refreshToken.findUnique({
      where: { token },
      include: { user: true },
    });
  }

  static delete(token: string) {
    return prisma.refreshToken.delete({
      where: { token },
    });
  }

  static deleteByUser(userId: number) {
    return prisma.refreshToken.deleteMany({
      where: { userId },
    });
  }
}
