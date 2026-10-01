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
    <div className="relative">
      <label htmlFor="meeting-search" className="sr-only">
        Search meetings
      </label>

      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage-500"
      >
        <circle cx="9" cy="9" r="5.5" />
        <path d="M13.5 13.5 17 17" />
      </svg>

      <input
        id="meeting-search"
        type="search"
        placeholder="Search meetings..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-full border border-border bg-surface py-3 pl-12 pr-5 text-foreground shadow-sm transition-colors placeholder:text-muted/70 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200"
      />
    </div>
  );
}