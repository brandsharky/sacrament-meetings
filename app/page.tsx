import Link from "next/link";



const highlights = [
  {
    title: "Leadership & announcements",
    description: "See who is presiding, conducting, and what's happening in the ward.",
  },
  {
    title: "Hymns & musical numbers",
    description: "Find the opening, sacrament, and closing hymns along with special music.",
  },
  {
    title: "Speakers & prayers",
    description: "Know who is speaking and offering the invocation and benediction.",
  },
];

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-sm sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-sage-600">
          Ward Sacrament Meetings
        </p>

        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Sacrament Meeting Planner
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
          View sacrament meeting programs, including leadership,
          announcements, hymns, speakers, musical numbers, and prayers.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/meetings"
            className="inline-block rounded-full bg-sage-700 px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sage-800"
          >
            View Meetings
          </Link>

          <Link
            href="/meetings/current"
            className="inline-block rounded-full border border-sage-300 px-7 py-3 font-semibold text-sage-800 transition-colors hover:bg-sage-50"
          >
            Current Meeting
          </Link>
        </div>
      </section>

      <section aria-label="What's included in each program">
        <ul className="grid gap-4 sm:grid-cols-3">
          {highlights.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span
                aria-hidden="true"
                className="block h-1.5 w-8 rounded-full bg-sage-300"
              />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}