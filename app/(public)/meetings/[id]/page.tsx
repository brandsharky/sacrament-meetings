import MeetingDetail from '@/components/MeetingDetail';
import Link from 'next/link';
import { getMeetingById } from '@/lib/meetings-db';



export default async function MeetingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    return (
      <section>
        <h1 className="text-3xl font-bold">Meeting not found</h1>

        <p className="mt-2 text-gray-600">We could not find that sacrament meeting.</p>

        <Link href="/meetings" className="mt-6 inline-block font-semibold underline">
          Back to meetings
        </Link>
      </section>
    );
  }

  return <MeetingDetail meeting={meeting} />;
}