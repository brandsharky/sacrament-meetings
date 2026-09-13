import { getMeetings } from '@/lib/meetings-db';
import { redirect } from 'next/navigation';



export default function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const date = sunday.toISOString().split('T')[0];

  const meetings = getMeetings(date);

  if (meetings.length === 0) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meetings[0].id}`);
}