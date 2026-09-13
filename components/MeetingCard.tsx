import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}



export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-black">
        {meeting.date}: {meeting.meetingType}
      </h2>

      <p className="mt-2 text-black">Presiding: {meeting.presiding}</p>

      <p className="mt-2 text-black">Conducting: {meeting.conducting}</p>

      <Link href={`/meetings/${meeting.id}`} className="mt-4 inline-block font-semibold underline text-blue-950">
        View Meeting
      </Link>
    </article>
  );
}