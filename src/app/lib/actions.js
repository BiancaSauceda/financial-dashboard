"use client";

// import { signIn } from '../../../auth';
import { signIn } from 'next-auth/react';
import { AuthError } from 'next-auth';


export async function authenticate(
  prevState,
  formData,
) {
  

  console.log("888666-----------");
  console.log('Previous state:', prevState);
  console.log('Form data:', formData);
  console.log("-----------");
  
  try {
    await signIn('credentials', {
      redirect: true,
      redirectTo: '/ui/dashboard',
      email: formData.get('email'),
      password: formData.get('password'),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}