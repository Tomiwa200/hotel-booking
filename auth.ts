import { User } from "./app/lib/definitions";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
   return user[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}





export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
         const parsedCredentials = z
          .object({ email: z.email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
           if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password_hash);
          if (passwordsMatch) return user;
          
        }
        
        console.log('invalid credentials');
        return null;
      },
    }),

  ],
   callbacks: {
  async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

     async session({ session, token }) {
      if(session.user) {
       session.user.id = token.id as string;
      }
      return session
    },
 }

});