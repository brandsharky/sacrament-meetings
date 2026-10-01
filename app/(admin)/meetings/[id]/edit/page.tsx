import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from '@/components/EditMeetingForm';



export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl">
      <header>
        <h1 className="text-3xl font-semibold sm:text-4xl">Edit Meeting</h1>
        <p className="mt-2 text-muted">
          Update the program for {meeting.date}.
        </p>
      </header>

      <EditMeetingForm meeting={meeting} />
    </section>
  );
}