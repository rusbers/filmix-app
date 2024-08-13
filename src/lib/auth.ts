import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./db";
import bcrypt from "bcryptjs";
import { LogInSchema } from "./validations";

const config = {
  pages: {
    signIn: "/login",
  },
  session: {
    maxAge: 20 * 24 * 60 * 60,
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credenitals) {
        // 1, validation
        const validatedLoginData = LogInSchema.safeParse(credenitals);

        if (!validatedLoginData.success) {
          return null;
        }

        // 2. extract values after validation:
        const { email, password } = validatedLoginData.data;

        // 3. Get the user from DB
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          console.log(`No user found`);
          return null;
        }

        // 4. Check if the credentials are correct

        const passwordsMatch = await bcrypt.compare(
          password,
          user.hashedPassword,
        );

        if (!passwordsMatch) {
          console.log("Invalid credentials");
          return null;
        }

        // 5. Return user if the credenitals are correct

        return user;
      },
    }),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const isLoggedIn = Boolean(auth?.user);
      const isAdmin = auth?.user.role === "admin";
      const isTryingToAccessApp = request.nextUrl.pathname.includes("/app");
      const isTryingToAccessAdminDashboard =
        request.nextUrl.pathname.includes("/dashboard");

      if (!isLoggedIn && isTryingToAccessApp) {
        return false;
      }

      if (isLoggedIn && isAdmin) {
        if (!isTryingToAccessAdminDashboard && !isTryingToAccessApp) {
          return Response.redirect(new URL(`/dashboard`, request.nextUrl));
        }
        return true;
      }

      if (isLoggedIn && !isAdmin && isTryingToAccessAdminDashboard) {
        return Response.redirect(new URL(`/app/home`, request.nextUrl));
      }

      if (isLoggedIn && isTryingToAccessApp) {
        return true;
      }

      if (isLoggedIn && !isTryingToAccessApp) {
        return Response.redirect(new URL(`/app/home`, request.nextUrl));
      }

      if (!isLoggedIn && !isTryingToAccessApp) {
        return true;
      }

      return false;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
        token.role = user.role;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = {
        ...session.user,
        id: token.userId as string,
        role: token.role as string,
      };

      return session;
    },
  },
} satisfies NextAuthConfig;

export const { auth, signIn, signOut } = NextAuth(config);
