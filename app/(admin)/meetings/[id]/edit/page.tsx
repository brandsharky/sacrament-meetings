import { getMeetingById } from '@/lib/meetings-db';
import { notFound } from 'next/navigation';
import EditMeetingForm from '@/components/EditMeetingForm';

export default async function EditMeetingPage({params,}: {params: Promise<{ id: string }>;}) {
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
    <section>
      <h1 className="text-3xl font-bold">Edit Meeting</h1>

      <EditMeetingForm meeting={meeting} />
    </section>
  );
}