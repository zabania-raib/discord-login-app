import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: !!process.env.AUTH_DEBUG, // <-- USE THIS NEW LINE
  trustHost: true,
  adapter: PrismaAdapter(client),
  providers: [
    Discord,
  ],
})