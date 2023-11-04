import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";


// title     String   @db.VarChar(255)
// content   String
// category  String
// image     String
// published Boolean  @default(false)
// userId    String
// createdAt DateTime @default(now())
// updatedAt DateTime
// users     users    @relation(fields: [userId], references: [id])
export const postRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return { text: "Hello World"}
  }),
  all: publicProcedure.query(({ ctx }) => {
  //  console.log("session",ctx.session)

    return ctx.prisma.posts.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.posts.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(z.object({
      title: z.string(),
      content: z.string(),
      category: z.string(),
      image: z.string(),
      published: z.boolean(),
      userId: z.string(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.posts.create({ data:{
        title: input.title,
        content: input.content,
        category: input.category,
        image: input.image,
        published: input.published,
        userId: input.userId,
        updatedAt: new Date(),
        
      }});
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    try {
      return ctx.prisma.posts.delete({ where: { id: input } });
    } catch (error) {
      console.log("error===>",error);
    }

  }),
});