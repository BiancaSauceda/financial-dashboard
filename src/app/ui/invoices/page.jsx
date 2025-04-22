import Pagination from '@/app/ui/invoices/pagination';
//lets users navigate between pages of invoices
import Search from '@/app/ui/search';
//This component allows users to search for specific invoices!
import Table from '@/app/ui/invoices/table';
//This component displays the invoices!
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
//This function fetches the total number of pages of invoices based on the search query.
// For example, if 12 invoices match the search query, and each page displays six invoices,
//  the total number of pages would be two!

export default async function Page({
  searchParams,
}) {
  const query = await searchParams?.query || '';
  const currentPage = Number(await searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}