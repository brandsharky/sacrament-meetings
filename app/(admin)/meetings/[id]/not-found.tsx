import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto mt-16 max-w-xl rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
      <h1 className="text-2xl font-bold">Meeting Not Found</h1>

      <p className="mt-3 text-gray-600">
        We could not find the sacrament meeting you are trying to edit.
      </p>

      <Link
        href="/meetings"
        className="mt-6 inline-block rounded-lg border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-50"
      >
        Back to Meetings
      </Link>
    </section>
  );
}