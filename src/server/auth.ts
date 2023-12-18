import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/server/db";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  type DefaultUser,
} from "next-auth";
import { comparePassword } from "@/lib/bcrypt";

interface IUser extends DefaultUser {
  id: string;
  // personalEmail: string;
}

declare module "next-auth" {
  interface User extends IUser {}

  // eslint-disable-next-line no-unused-vars
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  // eslint-disable-next-line no-unused-vars
  interface JWT extends IUser {}
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          if (!credentials?.email && !credentials?.password)
            throw new Error("Email and Password is required");
          if (!credentials?.email) throw new Error("Email is required");
          if (!credentials?.password) throw new Error("Password is required");
        }

        const { email, password } = credentials;

        if (!email.endsWith("@kiit.ac.in")) {
          throw new Error("Please use your KIIT email");
        }

        let user;
        try {
          user = await db.user.findUnique({
            where: {
              kiitEmail: email,
            },
          });
        } catch (_err) {
          throw new Error("Something went wrong. Please try again.");
        }

        if (!user) {
          throw new Error("User not found. Please Register.");
        }

        const isValid = await comparePassword(password, user.password);

        if (!isValid) {
          throw new Error("Wrong credentials. Please try again.");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "*",
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
