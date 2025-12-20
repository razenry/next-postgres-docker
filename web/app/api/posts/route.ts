import { PostService } from "@/service/post/post.service";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await PostService.getPosts();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const post = await PostService.createPost(
      body.title,
      body.content,
      body.authorId
    );
    return NextResponse.json(post, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 400 });
  }
}
