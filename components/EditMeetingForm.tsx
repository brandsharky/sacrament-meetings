'use client';

import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';

const initialState: State = {
  message: null,
  errors: {},
};

export default function EditMeetingForm({
  meeting,
}: {
  meeting: SacramentMeeting;
}) {
  const updateMeetingWithId = updateMeeting.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState
  );

  return (
    <form action={formAction} className="mt-6 space-y-6">
      {/* Date */}
      <div>
        <label htmlFor="date" className="block font-semibold">
          Date
        </label>

        <input
          id="date"
          name="date"
          type="date"
          defaultValue={meeting.date}
          required
          aria-describedby="date-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="date-error" aria-live="polite">
          {state.errors?.date?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Meeting Type */}
      <div>
        <label htmlFor="meetingType" className="block font-semibold">
          Meeting Type
        </label>

        <select
          id="meetingType"
          name="meetingType"
          defaultValue={meeting.meetingType}
          required
          aria-describedby="meetingType-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        >
          <option value="testimony">Testimony</option>
          <option value="regular">Regular</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
        </select>

        <div id="meetingType-error" aria-live="polite">
          {state.errors?.meetingType?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Presiding */}
      <div>
        <label htmlFor="presiding" className="block font-semibold">
          Presiding
        </label>

        <input
          id="presiding"
          name="presiding"
          defaultValue={meeting.presiding}
          required
          aria-describedby="presiding-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="presiding-error" aria-live="polite">
          {state.errors?.presiding?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Conducting */}
      <div>
        <label htmlFor="conducting" className="block font-semibold">
          Conducting
        </label>

        <input
          id="conducting"
          name="conducting"
          defaultValue={meeting.conducting}
          required
          aria-describedby="conducting-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="conducting-error" aria-live="polite">
          {state.errors?.conducting?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div>
        <label htmlFor="announcements" className="block font-semibold">
          Announcements
        </label>

        <textarea
          id="announcements"
          name="announcements"
          defaultValue={meeting.announcements?.join('\n') ?? ''}
          aria-describedby="announcements-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="announcements-error" aria-live="polite">
          {state.errors?.announcements?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Opening Hymn */}
      <div>
        <label
          htmlFor="openingHymnNumber"
          className="block font-semibold"
        >
          Opening Hymn Number
        </label>

        <input
          id="openingHymnNumber"
          name="openingHymnNumber"
          type="number"
          defaultValue={meeting.openingHymn.number}
          required
          aria-describedby="openingHymnNumber-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="openingHymnNumber-error" aria-live="polite">
          {state.errors?.openingHymnNumber?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="openingHymnTitle" className="block font-semibold">
          Opening Hymn Title
        </label>

        <input
          id="openingHymnTitle"
          name="openingHymnTitle"
          defaultValue={meeting.openingHymn.title}
          required
          aria-describedby="openingHymnTitle-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="openingHymnTitle-error" aria-live="polite">
          {state.errors?.openingHymnTitle?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Opening Prayer */}
      <div>
        <label htmlFor="openingPrayer" className="block font-semibold">
          Opening Prayer
        </label>

        <input
          id="openingPrayer"
          name="openingPrayer"
          defaultValue={meeting.openingPrayer}
          required
          aria-describedby="openingPrayer-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="openingPrayer-error" aria-live="polite">
          {state.errors?.openingPrayer?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Ward Business */}
      <div>
        <label htmlFor="wardBusiness" className="block font-semibold">
          Ward Business
        </label>

        <textarea
          id="wardBusiness"
          name="wardBusiness"
          defaultValue={meeting.wardBusiness
            .map((item) => item.description)
            .join('\n')}
          aria-describedby="wardBusiness-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="wardBusiness-error" aria-live="polite">
          {state.errors?.wardBusiness?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Stake Business */}
      <div>
        <label htmlFor="stakeBusiness" className="flex items-center gap-2">
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            defaultChecked={meeting.stakeBusiness}
          />
          Stake Business
        </label>
      </div>

      {/* Sacrament Hymn */}
      <div>
        <label
          htmlFor="sacramentHymnNumber"
          className="block font-semibold"
        >
          Sacrament Hymn Number
        </label>

        <input
          id="sacramentHymnNumber"
          name="sacramentHymnNumber"
          type="number"
          defaultValue={meeting.sacramentHymn.number}
          required
          aria-describedby="sacramentHymnNumber-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="sacramentHymnNumber-error" aria-live="polite">
          {state.errors?.sacramentHymnNumber?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="sacramentHymnTitle"
          className="block font-semibold"
        >
          Sacrament Hymn Title
        </label>

        <input
          id="sacramentHymnTitle"
          name="sacramentHymnTitle"
          defaultValue={meeting.sacramentHymn.title}
          required
          aria-describedby="sacramentHymnTitle-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="sacramentHymnTitle-error" aria-live="polite">
          {state.errors?.sacramentHymnTitle?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Speakers */}
      <div>
        <label htmlFor="speakers" className="block font-semibold">
          Speakers
        </label>

        <textarea
          id="speakers"
          name="speakers"
          defaultValue={meeting.speakers
            .map(
              (speaker) =>
                `${speaker.name}|${speaker.topic}|${speaker.type}`
            )
            .join('\n')}
          aria-describedby="speakers-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="speakers-error" aria-live="polite">
          {state.errors?.speakers?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Closing Hymn */}
      <div>
        <label
          htmlFor="closingHymnNumber"
          className="block font-semibold"
        >
          Closing Hymn Number
        </label>

        <input
          id="closingHymnNumber"
          name="closingHymnNumber"
          type="number"
          defaultValue={meeting.closingHymn.number}
          required
          aria-describedby="closingHymnNumber-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="closingHymnNumber-error" aria-live="polite">
          {state.errors?.closingHymnNumber?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="closingHymnTitle" className="block font-semibold">
          Closing Hymn Title
        </label>

        <input
          id="closingHymnTitle"
          name="closingHymnTitle"
          defaultValue={meeting.closingHymn.title}
          required
          aria-describedby="closingHymnTitle-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="closingHymnTitle-error" aria-live="polite">
          {state.errors?.closingHymnTitle?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Closing Prayer */}
      <div>
        <label htmlFor="closingPrayer" className="block font-semibold">
          Closing Prayer
        </label>

        <input
          id="closingPrayer"
          name="closingPrayer"
          defaultValue={meeting.closingPrayer}
          required
          aria-describedby="closingPrayer-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
        />

        <div id="closingPrayer-error" aria-live="polite">
          {state.errors?.closingPrayer?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message && (
        <p className="text-sm text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg border px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}