// import { Inter } from "next/font/google";
// import "./globals.css";
import '@/app/ui/global.css'; // Import global styles
import { inter } from '@/app/ui/fonts'; // Import the Inter font

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "MO-PCCO.R3 - NextJS Financial Dashboard",
//   description: "Starter code for Module 25 Capstone project - Financial Dashbard",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// } this is all shii i comented out n replaced with the current code beloww

export const metadata = {
  title: 'MO-PCCO.R3 - NextJS Financial Dashboard',
  description:
    'Starter code for Module 25 Capstone project - Financial Dashbard',
};

 

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}

//appending the inter.className to the className attribute of the <body> element 
// ensures that the Inter font is applied globally throughout the app!!
//also, the antialiased class from Tailwind CSS is added to provide smoother font rendering,
//  enhancing the visual appearance of the text <3