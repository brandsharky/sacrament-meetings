import Image from 'next/image';
import MeetingCard from '@/components/MeetingCard';
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import MeetingSearch from '@/components/MeetingSearch';
import Pagination from '@/components/Pagination';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Meetings',
  description: 'View sacrament meeting programs and review upcoming and past meetings.',
};


export default async function MeetingsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const { query = '', page = '1' } = await searchParams;
  const currentPage = Number(page);
  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section>
      <Image
        src="/gathering.jpeg"
        alt="Jesus Christ and His Apostles"
        width={374}
        height={500}
        priority
        className="h-48 w-full rounded-3xl object-cover object-[50%_25%] shadow-sm sm:h-64"
      />

      <header className="mt-8">
        <h1 className="text-3xl font-semibold sm:text-4xl">Sacrament Meetings</h1>
        <p className="mt-2 text-muted">
          View past and current sacrament meeting programs.
        </p>
      </header>

      <div className="mt-6">
        <MeetingSearch />
      </div>

      {meetings.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-sage-300 bg-surface px-6 py-12 text-center text-muted">
          No meetings found. Try a different search.
        </p>
      )}

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  );
}