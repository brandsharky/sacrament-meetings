'use client';

import { useActionState } from 'react';
import { createMeeting, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};



export default function CreateMeetingForm() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <form action={formAction} className="mt-6 space-y-6">
      {/* Date */}
      <div>
        <label htmlFor="date" className="block font-medium">
          Date
        </label>

        <input
          id="date"
          name="date"
          type="date"
          required
          aria-describedby="date-error"
          className="mt-1 w-full rounded border p-2"
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
        <label htmlFor="meetingType" className="block font-medium">
          Meeting Type
        </label>

        <select
          id="meetingType"
          name="meetingType"
          required
          aria-describedby="meetingType-error"
          className="mt-1 w-full rounded border p-2"
        >
          <option value="">Select a meeting type</option>
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
        <label htmlFor="presiding" className="block font-medium">
          Presiding
        </label>

        <input
          id="presiding"
          name="presiding"
          type="text"
          required
          aria-describedby="presiding-error"
          className="mt-1 w-full rounded border p-2"
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
        <label htmlFor="conducting" className="block font-medium">
          Conducting
        </label>

        <input
          id="conducting"
          name="conducting"
          type="text"
          required
          aria-describedby="conducting-error"
          className="mt-1 w-full rounded border p-2"
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
        <label htmlFor="announcements" className="block font-medium">
          Announcements
        </label>

        <textarea
          id="announcements"
          name="announcements"
          rows={3}
          aria-describedby="announcements-error"
          className="mt-1 w-full rounded border p-2"
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
      <fieldset className="space-y-4 rounded border p-4">
        <legend className="px-2 font-semibold">Opening Hymn</legend>

        <div>
          <label htmlFor="openingHymnNumber" className="block font-medium">
            Hymn Number
          </label>

          <input
            id="openingHymnNumber"
            name="openingHymnNumber"
            type="number"
            min="1"
            required
            aria-describedby="openingHymnNumber-error"
            className="mt-1 w-full rounded border p-2"
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
          <label htmlFor="openingHymnTitle" className="block font-medium">
            Hymn Title
          </label>

          <input
            id="openingHymnTitle"
            name="openingHymnTitle"
            type="text"
            required
            aria-describedby="openingHymnTitle-error"
            className="mt-1 w-full rounded border p-2"
          />

          <div id="openingHymnTitle-error" aria-live="polite">
            {state.errors?.openingHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>
      </fieldset>

      {/* Opening Prayer */}
      <div>
        <label htmlFor="openingPrayer" className="block font-medium">
          Opening Prayer
        </label>

        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          required
          aria-describedby="openingPrayer-error"
          className="mt-1 w-full rounded border p-2"
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
        <label htmlFor="wardBusiness" className="block font-medium">
          Ward Business
        </label>

        <textarea
          id="wardBusiness"
          name="wardBusiness"
          rows={3}
          aria-describedby="wardBusiness-error"
          className="mt-1 w-full rounded border p-2"
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
          />
          Stake Business
        </label>

        <div id="stakeBusiness-error" aria-live="polite">
          {state.errors?.stakeBusiness?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Sacrament Hymn */}
      <fieldset className="space-y-4 rounded border p-4">
        <legend className="px-2 font-semibold">Sacrament Hymn</legend>

        <div>
          <label htmlFor="sacramentHymnNumber" className="block font-medium">
            Hymn Number
          </label>

          <input
            id="sacramentHymnNumber"
            name="sacramentHymnNumber"
            type="number"
            min="1"
            required
            aria-describedby="sacramentHymnNumber-error"
            className="mt-1 w-full rounded border p-2"
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
          <label htmlFor="sacramentHymnTitle" className="block font-medium">
            Hymn Title
          </label>

          <input
            id="sacramentHymnTitle"
            name="sacramentHymnTitle"
            type="text"
            required
            aria-describedby="sacramentHymnTitle-error"
            className="mt-1 w-full rounded border p-2"
          />

          <div id="sacramentHymnTitle-error" aria-live="polite">
            {state.errors?.sacramentHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>
      </fieldset>

      {/* Speakers */}
      <div>
        <label htmlFor="speakers" className="block font-medium">
          Speakers / Musical Numbers
        </label>

        <textarea
          id="speakers"
          name="speakers"
          rows={5}
          placeholder="Name|Topic|speaker"
          aria-describedby="speakers-help speakers-error"
          className="mt-1 w-full rounded border p-2"
        />

        <p id="speakers-help" className="mt-1 text-sm text-gray-600">
          One per line. Use Name|Topic|speaker or
          Name|Topic|musical-number.
        </p>

        <div id="speakers-error" aria-live="polite">
          {state.errors?.speakers?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* Closing Hymn */}
      <fieldset className="space-y-4 rounded border p-4">
        <legend className="px-2 font-semibold">Closing Hymn</legend>

        <div>
          <label htmlFor="closingHymnNumber" className="block font-medium">
            Hymn Number
          </label>

          <input
            id="closingHymnNumber"
            name="closingHymnNumber"
            type="number"
            min="1"
            required
            aria-describedby="closingHymnNumber-error"
            className="mt-1 w-full rounded border p-2"
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
          <label htmlFor="closingHymnTitle" className="block font-medium">
            Hymn Title
          </label>

          <input
            id="closingHymnTitle"
            name="closingHymnTitle"
            type="text"
            required
            aria-describedby="closingHymnTitle-error"
            className="mt-1 w-full rounded border p-2"
          />

          <div id="closingHymnTitle-error" aria-live="polite">
            {state.errors?.closingHymnTitle?.map((error) => (
              <p key={error} className="mt-1 text-sm text-red-600">
                {error}
              </p>
            ))}
          </div>
        </div>
      </fieldset>

      {/* Closing Prayer */}
      <div>
        <label htmlFor="closingPrayer" className="block font-medium">
          Closing Prayer
        </label>

        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          required
          aria-describedby="closingPrayer-error"
          className="mt-1 w-full rounded border p-2"
        />

        <div id="closingPrayer-error" aria-live="polite">
          {state.errors?.closingPrayer?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* General message */}
      {state.message && (
        <p className="text-sm text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-600 px-4 py-2 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Creating...' : 'Create Meeting'}
      </button>
    </form>
  );
}