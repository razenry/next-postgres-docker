import { NextResponse } from "next/server";
import { handleError } from "@/lib/handle-error";
import { CreatePostSchema } from "@/resource/post/post.dto";
import { PostService } from "@/resource/post/post.service";

export async function GET() {
  try {
    const posts = await PostService.getPosts();
    return NextResponse.json(posts);
  } catch (e) {
    return handleError(e);
  }
}

export async function POST(req: Request) {
  try {
    const body = CreatePostSchema.parse(await req.json());
    const post = await PostService.createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (e) {
    return handleError(e);
  }
}
