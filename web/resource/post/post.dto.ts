import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(3),
  content: z.string().optional(),
  authorId: z.number().int().positive(),
});

export type CreatePostDTO = z.infer<typeof CreatePostSchema>;
