  //this file will export an authConfig object containing the configuration 

  import Credentials from 'next-auth/providers/credentials';

  import { NextResponse } from "next/server";
  import { z } from 'zod';
  import { neon } from '@neondatabase/serverless';
  import bcrypt from 'bcrypt';

  import { signIn } from 'next-auth/react';
  

async function getUser(email) {
  try {
    const sql = neon(process.env.DATABASE_URL);
    console.log('Database connection:', sql); // Log the database connection for debugging
    const result = await sql.query(`SELECT * FROM users WHERE email = $1`, [email]);

    console.log('Full database response:', result);

    // Directly use the first item if result is an array
    const user = Array.isArray(result) && result.length > 0 ? result[0] : null;

    if (!user) {
      console.error('No user found for email:', email);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
 
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/ui');
  
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Block unauthenticated users from dashboard
      } else if (isLoggedIn) {
        return true; // Allow access
      }
      return true;
    },
  
    async redirect({ url, baseUrl }) {
      console.log('Redirecting to:', baseUrl + '/ui/dashboard');
      return baseUrl + '/ui/dashboard'; // Ensures proper post-login redirection
    }
  },
  

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
};





//   // options for NextAuth.js!
// export const authConfig = {
//     pages: {
//       signIn: '/login',
//     },
//      //This code will prevent users from accessing dashboard pages unless logged in//
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/ui');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to the login page
//       } else if (isLoggedIn) {
//         // return Response.redirect(new URL('/ui/dashboard', nextUrl));
//         return NextResponse.redirect(new URL('/ui/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now

//   };