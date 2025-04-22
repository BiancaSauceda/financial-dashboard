import NextAuth from 'next-auth';
import { authConfig } from '../auth.config.js'; // Import the authConfig object from auth.config.js
export default NextAuth(authConfig).auth;
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

//In this code, you're initializing NextAuth.js w the authConfig object + exporting the auth property.
//  You're also using the matcher option from Middleware to specify that it should run on specific paths!