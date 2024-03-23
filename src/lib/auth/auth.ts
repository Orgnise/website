import NextAuth, { AuthOptions } from "next-auth";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;
export const NextAuthOptions = {
  pages: {
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: `${VERCEL_DEPLOYMENT ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)
        domain: VERCEL_DEPLOYMENT
          ? `.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
          : undefined,
        secure: VERCEL_DEPLOYMENT,
      },
    },
  },
  providers: [],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      console.log("jwt begin", { token, user, account, profile });
      if (!token.email) {
        return {};
      }

      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId;
      }
      if (user) {
        token.user = user;
      }
      return token;
    },

    authorized({ auth, request: { nextUrl } }: any) {
      console.log("authorized begin", { auth, nextUrl });
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    async session({ session, token, user }) {
      // console.log("session begin", { session, token, user })
      session.user = {
        ...session.user,
      };
      return session;
    },
  },
  events: {
    async signIn(message) {
      /* on new user */
      if (message.isNewUser) {
        // To be used for sending welcome emails
      }
      /* on successful sign in */
      // console.log("signIn event", message)
    },
    async signOut(message) {
      /* on signout */
    },
    async createUser(message) {
      /* user created */
      console.log("createUser event", message);
    },
    async linkAccount(message) {
      /* account linked to a user */
    },
    async session(message) {
      /* session is active */
    },
    async error() {
      /* error in authentication flow */
    },
  },
  secret: process.env.AUTH_SECRET,
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
} as AuthOptions;

export const { auth, signIn, signOut } = NextAuth({
  ...NextAuthOptions,
});
