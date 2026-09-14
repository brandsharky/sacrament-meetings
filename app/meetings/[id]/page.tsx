import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';
import Link from 'next/link';



export default async function MeetingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const baseUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000');

  const response = await fetch(`${baseUrl}/api/meetings/${id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
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

  const meeting: SacramentMeeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}