import { auth } from '@clerk/nextjs'
import { prisma } from './db'

export const getUserByClerkID = async () => {
  const { userId } = await auth()

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })

  return user
}
