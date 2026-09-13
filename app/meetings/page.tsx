import Image from 'next/image';
import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';



export default async function MeetingsPage() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/meetings`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch meetings.');
  }

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <section>
      <Image src="/lost_lamb.jpeg" alt="Jesus Christ and the Lost Lamb" width={374} height={500} className="mb-8 h-auto w-full rounded-lg object-cover" />

      <h1 className="text-3xl font-bold">Sacrament Meetings</h1>

      <p className="mt-2 text-gray-600">View past and current sacrament meeting programs.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}