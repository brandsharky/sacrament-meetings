'use client';

import Link from 'next/link';
import { useEffect } from 'react';



export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Meetings error:', error);
  }, [error]);

  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm">
      <p className="text-sm font-medium uppercase tracking-widest text-[#9a4a3a]">
        Something went wrong
      </p>
      <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">
        We couldn&apos;t load that page
      </h1>

      <p className="mt-3 text-muted">
        We were unable to load or process the meeting information.
        Please try again.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-sage-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-800"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded-full border border-sage-300 bg-surface px-6 py-2.5 text-sm font-semibold text-sage-800 transition-colors hover:bg-sage-50"
        >
          Back to Meetings
        </Link>
      </div>
    </section>
  );
}