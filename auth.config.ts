import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHotels = nextUrl.pathname.startsWith(`/hotels`);
      if (isOnHotels) {
        if (isLoggedIn) return true;
        return false; 
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/hotels', nextUrl));
      }
      return true;
    },
     
  },
  providers: [], 
} satisfies NextAuthConfig;