'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';



export default function Pagination({totalPages, currentPage,}: {totalPages: number;currentPage: number;}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams);

    params.set('page', page.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  if (totalPages <= 1) {
    return null;
  }

  const buttonStyles =
    "rounded-full border border-sage-300 bg-surface px-5 py-2 text-sm font-medium text-sage-800 transition-colors hover:bg-sage-50 disabled:cursor-not-allowed disabled:border-border disabled:text-muted disabled:opacity-50 disabled:hover:bg-surface";

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-3 sm:gap-5"
    >
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={buttonStyles}
      >
        Previous
      </button>

      <span className="text-sm text-muted">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={buttonStyles}
      >
        Next
      </button>
    </nav>
  );
}