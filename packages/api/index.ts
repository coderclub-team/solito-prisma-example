export { appRouter, type AppRouter } from './src/root'
export { createTRPCContext } from './src/trpc'
import { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })
type DeletePostsFunction = typeof prisma.posts.delete
// const del:DeletePostsFunction=(args)=>{
//   prisma.posts.update({
//   ...args,
//   data:{

//   }

//   })
// }
prisma.$extends({
  model: {
    posts: {
      async delete<DeletePostsFunction>(data) {
        // prisma.posts.update()
      },
    },
  },
})

export { prisma }

export * from '@prisma/client'

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
