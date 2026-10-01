'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { updateMeeting, type State } from '@/lib/actions';
import type { SacramentMeeting } from '@/lib/types';
import {
  Field,
  FieldErrors,
  FormSection,
  inputStyles,
} from '@/components/FormParts';



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
    <form action={formAction} className="mt-8 space-y-6">
      <FormSection title="Meeting Details">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="date" label="Date" errors={state.errors?.date}>
            <input
              id="date"
              name="date"
              type="date"
              defaultValue={meeting.date}
              required
              aria-describedby="date-error"
              className={inputStyles}
            />
          </Field>

          <Field id="meetingType" label="Meeting Type" errors={state.errors?.meetingType}>
            <select
              id="meetingType"
              name="meetingType"
              defaultValue={meeting.meetingType}
              required
              aria-describedby="meetingType-error"
              className={inputStyles}
            >
              <option value="testimony">Testimony</option>
              <option value="regular">Regular</option>
              <option value="stake">Stake</option>
              <option value="general">General</option>
            </select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="presiding" label="Presiding" errors={state.errors?.presiding}>
            <input
              id="presiding"
              name="presiding"
              defaultValue={meeting.presiding}
              required
              aria-describedby="presiding-error"
              className={inputStyles}
            />
          </Field>

          <Field id="conducting" label="Conducting" errors={state.errors?.conducting}>
            <input
              id="conducting"
              name="conducting"
              defaultValue={meeting.conducting}
              required
              aria-describedby="conducting-error"
              className={inputStyles}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection title="Announcements">
        <Field
          id="announcements"
          label="Announcements"
          help="One announcement per line."
          errors={state.errors?.announcements}
        >
          <textarea
            id="announcements"
            name="announcements"
            rows={3}
            defaultValue={meeting.announcements?.join('\n') ?? ''}
            aria-describedby="announcements-help announcements-error"
            className={`${inputStyles} resize-y`}
          />
        </Field>
      </FormSection>

      <FormSection title="Opening">
        <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
          <Field id="openingHymnNumber" label="Hymn Number" errors={state.errors?.openingHymnNumber}>
            <input
              id="openingHymnNumber"
              name="openingHymnNumber"
              type="number"
              defaultValue={meeting.openingHymn.number}
              required
              aria-describedby="openingHymnNumber-error"
              className={inputStyles}
            />
          </Field>

          <Field id="openingHymnTitle" label="Hymn Title" errors={state.errors?.openingHymnTitle}>
            <input
              id="openingHymnTitle"
              name="openingHymnTitle"
              defaultValue={meeting.openingHymn.title}
              required
              aria-describedby="openingHymnTitle-error"
              className={inputStyles}
            />
          </Field>
        </div>

        <Field id="openingPrayer" label="Opening Prayer" errors={state.errors?.openingPrayer}>
          <input
            id="openingPrayer"
            name="openingPrayer"
            defaultValue={meeting.openingPrayer}
            required
            aria-describedby="openingPrayer-error"
            className={inputStyles}
          />
        </Field>
      </FormSection>

      <FormSection title="Ward Business">
        <Field
          id="wardBusiness"
          label="Ward Business"
          help="One item per line."
          errors={state.errors?.wardBusiness}
        >
          <textarea
            id="wardBusiness"
            name="wardBusiness"
            rows={3}
            defaultValue={meeting.wardBusiness
              .map((item) => item.description)
              .join('\n')}
            aria-describedby="wardBusiness-help wardBusiness-error"
            className={`${inputStyles} resize-y`}
          />
        </Field>

        <div>
          <label
            htmlFor="stakeBusiness"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-sage-900"
          >
            <input
              id="stakeBusiness"
              name="stakeBusiness"
              type="checkbox"
              defaultChecked={meeting.stakeBusiness}
              className="h-4 w-4 accent-sage-600"
            />
            Stake Business
          </label>

          <FieldErrors id="stakeBusiness" errors={state.errors?.stakeBusiness} />
        </div>
      </FormSection>

      <FormSection title="Sacrament">
        <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
          <Field id="sacramentHymnNumber" label="Hymn Number" errors={state.errors?.sacramentHymnNumber}>
            <input
              id="sacramentHymnNumber"
              name="sacramentHymnNumber"
              type="number"
              defaultValue={meeting.sacramentHymn.number}
              required
              aria-describedby="sacramentHymnNumber-error"
              className={inputStyles}
            />
          </Field>

          <Field id="sacramentHymnTitle" label="Hymn Title" errors={state.errors?.sacramentHymnTitle}>
            <input
              id="sacramentHymnTitle"
              name="sacramentHymnTitle"
              defaultValue={meeting.sacramentHymn.title}
              required
              aria-describedby="sacramentHymnTitle-error"
              className={inputStyles}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection title="Speakers & Musical Numbers">
        <Field
          id="speakers"
          label="Speakers / Musical Numbers"
          help="One per line. Use Name|Topic|speaker or Name|Topic|musical-number."
          errors={state.errors?.speakers}
        >
          <textarea
            id="speakers"
            name="speakers"
            rows={5}
            defaultValue={meeting.speakers
              .map(
                (speaker) =>
                  `${speaker.name}|${speaker.topic ?? ""}|${speaker.type}`
              )
              .join('\n')}
            aria-describedby="speakers-help speakers-error"
            className={`${inputStyles} resize-y`}
          />
        </Field>
      </FormSection>

      <FormSection title="Closing">
        <div className="grid gap-5 sm:grid-cols-[8rem_1fr]">
          <Field id="closingHymnNumber" label="Hymn Number" errors={state.errors?.closingHymnNumber}>
            <input
              id="closingHymnNumber"
              name="closingHymnNumber"
              type="number"
              defaultValue={meeting.closingHymn.number}
              required
              aria-describedby="closingHymnNumber-error"
              className={inputStyles}
            />
          </Field>

          <Field id="closingHymnTitle" label="Hymn Title" errors={state.errors?.closingHymnTitle}>
            <input
              id="closingHymnTitle"
              name="closingHymnTitle"
              defaultValue={meeting.closingHymn.title}
              required
              aria-describedby="closingHymnTitle-error"
              className={inputStyles}
            />
          </Field>
        </div>

        <Field id="closingPrayer" label="Closing Prayer" errors={state.errors?.closingPrayer}>
          <input
            id="closingPrayer"
            name="closingPrayer"
            defaultValue={meeting.closingPrayer}
            required
            aria-describedby="closingPrayer-error"
            className={inputStyles}
          />
        </Field>
      </FormSection>

      {state.message && (
        <p
          className="rounded-xl border border-[#e6cbbf] bg-[#faeee8] px-4 py-3 text-sm text-[#9a4a3a]"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
        <Link
          href={`/meetings/${meeting.id}`}
          className="rounded-full border border-sage-300 bg-surface px-6 py-3 text-center text-sm font-semibold text-sage-800 transition-colors hover:bg-sage-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-sage-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}