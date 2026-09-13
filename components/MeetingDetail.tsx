import type { SacramentMeeting } from '@/lib/types';
import PrintButton from '@/components/PrintButton';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}



export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="space-y-8 rounded-lg border bg-white p-8 shadow-sm">
      <header>
        <h1 className="text-3xl font-bold text-black">Sacrament Meeting</h1>

        <p className="mt-2 text-gray-600">{meeting.date}</p>

        <p className="mt-1 capitalize text-black-600 text-black">{meeting.meetingType} meeting</p>

        <div className="mt-4">
          <PrintButton />
        </div>
      </header>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Leadership</h2>

        <p className="mt-2 text-black">
          <strong>Presiding:</strong> {meeting.presiding}
        </p>

        <p className="text-black">
          <strong>Conducting:</strong> {meeting.conducting}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Announcements</h2>

        {meeting.announcements && meeting.announcements.length > 0 ? (
          <ul className="mt-2 list-disc pl-6 text-black">
            {meeting.announcements.map((announcement) => (
              <li key={announcement}>{announcement}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">No announcements.</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Opening</h2>

        <p className="mt-2 text-black">
          <strong>Hymn:</strong> #{meeting.openingHymn.number} {meeting.openingHymn.title}
        </p>

        <p className="text-black">
          <strong>Prayer:</strong> {meeting.openingPrayer}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="mt-2 list-disc pl-6 text-black">
            {meeting.wardBusiness.map((item) => (
              <li key={item.description}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">No ward business.</p>
        )}

        <p className="mt-2 text-black">
          <strong>Stake business:</strong> {meeting.stakeBusiness ? 'Yes' : 'No'}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Sacrament</h2>

        <p className="mt-2 text-black">
          <strong>Hymn:</strong> #{meeting.sacramentHymn.number} {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Speakers & Musical Numbers</h2>

        <ul className="mt-2 space-y-2 text-black">
          {meeting.speakers.map((item) => (
            <li key={`${item.type}-${item.name}`}>
              <strong>{item.name}</strong>
              {item.topic && ` — ${item.topic}`}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-600">Closing</h2>

        <p className="mt-2 text-black">
          <strong>Hymn:</strong> #{meeting.closingHymn.number} {meeting.closingHymn.title}
        </p>

        <p className="text-black">
          <strong>Prayer:</strong> {meeting.closingPrayer}
        </p>
      </section>
    </article>
  );
}