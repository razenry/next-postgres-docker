import prisma from "@/lib/prisma";

export class PostRepository {
  static findAll() {
    return prisma.post.findMany({
      include: { author: true },
    });
  }

  static create(data: {
    title: string;
    content?: string;
    authorId: number;
  }) {
    return prisma.post.create({ data });
  }

  static publish(id: number) {
    return prisma.post.update({
      where: { id },
      data: { published: true },
    });
  }

  static delete(id: number) {
    return prisma.post.delete({ where: { id } });
  }
}