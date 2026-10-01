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


export default async function MeetingsPage({searchParams,}: {searchParams: Promise<{query?: string;page?: string;}>;}) {
  const { query = '', page = '1' } = await searchParams;
  const currentPage = Number(page);
  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <section>
      <Image src="/gathering.jpeg" alt="Jesus Christ and His Apostles" width={374} height={500} className="mb-8 h-auto w-full rounded-lg object-cover" />

      <h1 className="text-3xl font-bold">Sacrament Meetings</h1>

      <p className="mt-2 text-gray-600">View past and current sacrament meeting programs.</p>

      <MeetingSearch />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </section>
  );
}