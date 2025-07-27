import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { PrismaAdapter } from "@auth/prisma-adapter" // NEW LINE
import { PrismaClient } from "@prisma/client"       // NEW LINE

const client = new PrismaClient() // NEW LINE

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(client), // <-- NEW LINE HERE
  providers: [
    Discord,
  ],
})