import {Inter} from 'next/font/google';
import { Lusitana} from 'next/font/google';
export const lusitana = Lusitana({subsets: ['latin'],weight: ['400', '700']});
//This module provides a convenient way to import Google Fonts into Next.js apps!
//Additionally, you wanna specify that you want to load the latin subset of the Inter font.
export const inter = Inter({subsets: ['latin']});