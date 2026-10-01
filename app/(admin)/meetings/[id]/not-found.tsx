import Link from 'next/link';



export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm">
      <h1 className="text-2xl font-semibold sm:text-3xl">Meeting Not Found</h1>

      <p className="mt-3 text-muted">
        We could not find the sacrament meeting you are trying to edit.
      </p>

      <Link
        href="/meetings"
        className="mt-8 inline-block rounded-full bg-sage-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-800"
      >
        Back to Meetings
      </Link>
    </section>
  );
}