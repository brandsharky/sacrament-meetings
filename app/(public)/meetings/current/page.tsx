import { getMeetingByDate } from '@/lib/meetings-db';
import { redirect } from 'next/navigation';



export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const date = sunday.toISOString().split('T')[0];

  const meeting = await getMeetingByDate(date);

  if (!meeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meeting.id}`);
}