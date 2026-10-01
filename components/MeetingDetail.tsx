import type { ReactNode } from 'react';
import type { SacramentMeeting } from '@/lib/types';
import PrintButton from '@/components/PrintButton';



interface MeetingDetailProps {
  meeting: SacramentMeeting;
}


function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8 print:break-inside-avoid">
      <h2 className="text-lg font-semibold text-sage-800">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}


function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <dt className="w-28 shrink-0 text-muted">{label}</dt>
      <dd className="font-medium">{children}</dd>
    </div>
  );
}


export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10 print:rounded-none print:border-0 print:p-0 print:shadow-none">
      <header className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="w-fit rounded-full bg-sage-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sage-800">
            {meeting.meetingType} meeting
          </p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Sacrament Meeting
          </h1>
          <p className="mt-2 text-lg text-muted">{meeting.date}</p>
        </div>

        <PrintButton />
      </header>

      <div className="divide-y divide-border">
        <Section title="Leadership">
          <dl className="space-y-2">
            <Field label="Presiding">{meeting.presiding}</Field>
            <Field label="Conducting">{meeting.conducting}</Field>
          </dl>
        </Section>

        <Section title="Announcements">
          {meeting.announcements && meeting.announcements.length > 0 ? (
            <ul className="list-disc space-y-1.5 pl-5 marker:text-sage-400">
              {meeting.announcements.map((announcement) => (
                <li key={announcement}>{announcement}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No announcements.</p>
          )}
        </Section>

        <Section title="Opening">
          <dl className="space-y-2">
            <Field label="Hymn">
              #{meeting.openingHymn.number} {meeting.openingHymn.title}
            </Field>
            <Field label="Prayer">{meeting.openingPrayer}</Field>
          </dl>
        </Section>

        <Section title="Ward Business">
          {meeting.wardBusiness.length > 0 ? (
            <ul className="list-disc space-y-1.5 pl-5 marker:text-sage-400">
              {meeting.wardBusiness.map((item) => (
                <li key={item.description}>{item.description}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No ward business.</p>
          )}

          <dl className="pt-2">
            <Field label="Stake business">
              {meeting.stakeBusiness ? 'Yes' : 'No'}
            </Field>
          </dl>
        </Section>

        <Section title="Sacrament">
          <dl>
            <Field label="Hymn">
              #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}
            </Field>
          </dl>
        </Section>

        <Section title="Speakers & Musical Numbers">
          <ul className="space-y-3">
            {meeting.speakers.map((item) => (
              <li key={`${item.type}-${item.name}`}>
                <p className="text-xs font-medium uppercase tracking-wide text-sage-600">
                  {item.type}
                </p>
                <p className="font-medium">
                  {item.name}
                  {item.topic && (
                    <span className="font-normal text-muted"> — {item.topic}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Closing">
          <dl className="space-y-2">
            <Field label="Hymn">
              #{meeting.closingHymn.number} {meeting.closingHymn.title}
            </Field>
            <Field label="Prayer">{meeting.closingPrayer}</Field>
          </dl>
        </Section>
      </div>
    </article>
  );
}