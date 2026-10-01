import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";



interface MeetingCardProps {
  meeting: SacramentMeeting;
}


export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sage-200 hover:shadow-md">
      <p className="w-fit rounded-full bg-sage-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sage-800">
        {meeting.meetingType}
      </p>

      <h2 className="mt-4 text-xl font-semibold">{meeting.date}</h2>

      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted">Presiding</dt>
          <dd className="font-medium">{meeting.presiding}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-24 shrink-0 text-muted">Conducting</dt>
          <dd className="font-medium">{meeting.conducting}</dd>
        </div>
      </dl>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-6 inline-flex items-center gap-1 pt-1 text-sm font-semibold text-sage-700 transition-colors hover:text-sage-900"
      >
        View Meeting
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </article>
  );
}