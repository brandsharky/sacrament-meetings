import MeetingDetail from '@/components/MeetingDetail';
import Link from 'next/link';
import { getMeetingById } from '@/lib/meetings-db';
import { deleteMeeting } from '@/lib/actions';



function MeetingNotFound() {
  return (
    <section className="rounded-3xl border border-border bg-surface px-6 py-16 text-center shadow-sm">
      <h1 className="text-3xl font-semibold">Meeting not found</h1>
      <p className="mt-3 text-muted">
        We could not find that sacrament meeting.
      </p>
      <Link
        href="/meetings"
        className="mt-8 inline-block rounded-full bg-sage-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sage-800"
      >
        Back to meetings
      </Link>
    </section>
  );
}


export default async function MeetingPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    return <MeetingNotFound />;
  }

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    return <MeetingNotFound />;
  }

  return (
    <section>
      <Link
        href="/meetings"
        className="mb-5 inline-flex items-center gap-1 text-sm font-medium text-sage-700 transition-colors hover:text-sage-900 print:hidden"
      >
        <span aria-hidden="true">←</span> All meetings
      </Link>

      <MeetingDetail meeting={meeting} />

      <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded-full border border-sage-300 bg-surface px-5 py-2.5 text-sm font-semibold text-sage-800 transition-colors hover:bg-sage-50"
        >
          Edit Meeting
        </Link>

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <button
            type="submit"
            className="rounded-full border border-[#e6cbbf] bg-surface px-5 py-2.5 text-sm font-semibold text-[#9a4a3a] transition-colors hover:bg-[#faeee8]"
          >
            Delete Meeting
          </button>
        </form>
      </div>
    </section>
  );
}