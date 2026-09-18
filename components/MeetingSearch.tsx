'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';



export default function MeetingSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    params.set('page', '1');

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-8">
      <label htmlFor="meeting-search" className="sr-only">
        Search meetings
      </label>

      <input
        id="meeting-search"
        type="search"
        placeholder="Search meetings..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-2"
      />
    </div>
  );
}