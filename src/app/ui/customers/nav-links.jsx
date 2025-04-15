'use client';
//To use hooks like usePathname(), the component needs to be a client-side component. 
// This is done by adding 'use client'; directive at the top of the file

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';

import {usePathname} from 'next/navigation';
//The usePathname hook in Next.js retrieves the current URL path, enabling conditional 
// rendering or logic based on the active route!!

import clsx from 'clsx';
//use clsx library to conditionally apply class names based on whether the link's href matches the pathname
//If they match, the link is displayed w/ blue text + a light blue background to indicate it's active!

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/ui/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/ui/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/ui/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  //using usePathname() hook to get current pathname + assign it to a variable called pathname.
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
