import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold">
        Sacrament Meeting Planner
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        View sacrament meeting programs, including leadership,
        announcements, hymns, speakers, musical numbers, and prayers.
      </p>

      <div className="mt-8">
        <Link href="/meetings" className="inline-block rounded-md bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800">View Meetings</Link>
      </div>
    </section>
  );
}
