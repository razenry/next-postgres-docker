import { PostRepository } from "@/repository/post/post.repository";
import { UserRepository } from "@/repository/user/user.repository";

export class PostService {
  static async createPost(
    title: string,
    content: string | undefined,
    authorId: number
  ) {
    const user = await UserRepository.findById(authorId);
    if (!user) {
      throw new Error("Author not found");
    }

    return PostRepository.create({
      title,
      content,
      authorId,
    });
  }

  static publishPost(id: number) {
    return PostRepository.publish(id);
  }

  static getPosts() {
    return PostRepository.findAll();
  }

  static deletePost(id: number) {
    return PostRepository.delete(id);
  }
}
