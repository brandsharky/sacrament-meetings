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
    <section className="mx-auto mt-16 max-w-xl rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>

      <p className="mt-3 text-gray-600">
        We were unable to load or process the meeting information.
        Please try again.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded-lg border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50"
        >
          Back to Meetings
        </Link>
      </div>
    </section>
  );
}