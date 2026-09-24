import MeetingDetail from '@/components/MeetingDetail';
import Link from 'next/link';
import { getMeetingById } from '@/lib/meetings-db';
import { deleteMeeting } from '@/lib/actions';



export default async function MeetingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    return (
      <section>
        <h1 className="text-3xl font-bold">Meeting not found</h1>
        <p className="mt-2 text-gray-600">
          We could not find that sacrament meeting.
        </p>
        <Link
          href="/meetings"
          className="mt-6 inline-block font-semibold underline"
        >
          Back to meetings
        </Link>
      </section>
    );
  }

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

  return (
    <section>
      <MeetingDetail meeting={meeting} />

      <div className="mt-6 flex gap-4">
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded-lg border px-4 py-2 font-semibold"
        >
          Edit Meeting
        </Link>

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
          >
            Delete Meeting
          </button>
        </form>
      </div>
    </section>
  );
}