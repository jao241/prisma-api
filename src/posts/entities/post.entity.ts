import { Post } from '@prisma/client';

export class PostEntity implements Post {
  id: number;
  published: boolean;
  content: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}
