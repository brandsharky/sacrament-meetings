import type { NextAuthConfig } from 'next-auth';



export const authConfig = {
  pages: {
    signIn: '/login',
  },

  callbacks: {
    authorized({ auth, request }) {
      const { nextUrl } = request;
      const isLoggedIn = !!auth?.user;

      const isProtected =
        nextUrl.pathname.startsWith('/meetings/create') ||
        nextUrl.pathname.match(/^\/meetings\/[^/]+\/edit$/);

      if (isProtected) {
        if (isLoggedIn) return true;
        return false;
      }

      if (isLoggedIn && nextUrl.pathname === '/login' && request.method === 'GET') {
        return Response.redirect(new URL('/meetings', nextUrl));
      }

      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;