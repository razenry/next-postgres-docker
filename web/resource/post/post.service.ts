import { NotFoundError } from "@/lib/errors";
import { CreatePostDTO } from "./post.dto";
import { UserRepository } from "../user/user.repository";
import { PostRepository } from "./post.repository";

export class PostService {
  static async createPost(data: CreatePostDTO) {
    const author = await UserRepository.findById(data.authorId);
    if (!author) {
      throw new NotFoundError("Author not found");
    }

    return PostRepository.create(data);
  }

  static getPosts() {
    return PostRepository.findAll();
  }
}
