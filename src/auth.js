import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig);

// const handler = NextAuth(authConfig);
// export { handler as GET, handler as POST };




// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { z } from 'zod';
// import { neon } from '@neondatabase/serverless';
// import bcrypt from 'bcrypt';
//using bcrypt to check if the passwords match btwww

// async function getUser(email) {
//     try {
//       const sql = neon(`${process.env.DATABASE_URL}`);
//       const user = await sql`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0];
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
//   }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//     async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials);
//           if (parsedCredentials.success) {
//             const { email, password } = parsedCredentials.data;
//             const user = await getUser(email);
//             if (!user) return null;
//                       const passwordsMatch = await bcrypt.compare(password, user.password);
//                      if (passwordsMatch) return user;
//                  }
//                  console.log('Invalid credentials');
//                  return null;
//                  //With this implementation, if the passwords match, you want to return the user; 
//                  // otherwise, return null to prevent the user from logging in!
//             },
//         }),
//     ],
// });