import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config'; // Import the authConfig object from auth.config.js

export const GET = NextAuth(authConfig);
export const POST = NextAuth(authConfig);
