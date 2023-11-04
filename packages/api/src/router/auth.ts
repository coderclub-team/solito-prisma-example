import { protectedProcedure, publicProcedure, createTRPCRouter } from '../trpc'

import { PrismaClient, Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import * as z from 'zod'
// ;Prisma.PrismaClientKnownRequestError |
//   Prisma.PrismaClientUnknownRequestError |
//   Prisma.PrismaClientRustPanicError |
//   Prisma.PrismaClientInitializationError
// interface PrismaError
//   extends Prisma.PrismaClientKnownRequestError,
//     Prisma.PrismaClientUnknownRequestError,
//     Prisma.PrismaClientRustPanicError,
//     Prisma.PrismaClientInitializationError {}

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    // return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @acme/auth package
    return 'you can see this secret message!'
  }),
  login: publicProcedure.query(() => {
    return 'hello'
  }),
  register_request: publicProcedure

    .input(
      z.object({
        phone: z.string(),
      })
    )

    .mutation(async ({ ctx, input }) => {
      try {
      const user=await  ctx.prisma.users.create({
          data: {
            phone: input.phone,
          },
        })

        if(!user) throw Error('user not found')

        return user
      } catch (error) {
        console.log('error===>', error)
        return error
        
      }
    }),

  register_confirm: publicProcedure.query(() => {}),
})
