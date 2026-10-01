import { getMeetingByDate } from '@/lib/meetings-db';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";



export default async function CurrentMeetingPage() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  // en-CA formats as YYYY-MM-DD using the local date, not UTC
  const date = sunday.toLocaleDateString('en-CA');

  const meeting = await getMeetingByDate(date);

  if (!meeting) {
    redirect('/meetings');
  }

  redirect(`/meetings/${meeting.id}`);
}