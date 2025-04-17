'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { searchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term){
    console.log(term);
    params.set('page', '1');
    const params = new URLSearchParams(searchParams);
    //URLSearchParams is a Web API that gives utility methods for manipulating URL query params. 
    //Instead of making a super complex string literal, u can use it to get the params string like ?page=1&query=a.
    if(term){
      params.set('query', term);
    }else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`)
    //${pathname} is the current path (/dashboard/invoices).
    //replace(`${pathname}?${params.toString()}`) updates the URL with the user's search data, for example, 
    // /dashboard/invoices?query=lee if the user searches for "Lee."
    //As the user types into the search bar, params.toString() translates this input into a URL-friendly format!
    //The URL is updated without reloading the page <3
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    defaultValue={searchParams.get('query')?.toString}
    </div>
  );
}
//all this captures the users search input and passes it to the handleSearch function!