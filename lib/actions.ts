'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import {
  addMeeting,
  updateMeeting as updateMeetingInDatabase,
  deleteMeeting as deleteMeetingFromDatabase,
} from './meetings-db';

import type { MeetingType, SpeakerItem } from './types';

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];
    wardBusiness?: string[];
    stakeBusiness?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    speakers?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };
  message?: string | null;
};

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: z.enum([
    'testimony',
    'regular',
    'stake',
    'general',
  ] as [MeetingType, ...MeetingType[]]),
  presiding: z.string().min(1, 'Presiding is required.'),
  conducting: z.string().min(1, 'Conducting is required.'),
  announcements: z.string().optional(),
  openingHymnNumber: z.coerce.number().int().positive(),
  openingHymnTitle: z.string().min(1, 'Opening hymn title is required.'),
  openingPrayer: z.string().min(1, 'Opening prayer is required.'),
  wardBusiness: z.string().optional(),
  stakeBusiness: z.boolean(),
  sacramentHymnNumber: z.coerce.number().int().positive(),
  sacramentHymnTitle: z.string().min(1, 'Sacrament hymn title is required.'),
  speakers: z.string().optional(),
  closingHymnNumber: z.coerce.number().int().positive(),
  closingHymnTitle: z.string().min(1, 'Closing hymn title is required.'),
  closingPrayer: z.string().min(1, 'Closing prayer is required.'),
});



export async function createMeeting(prevState: State, formData: FormData): Promise<State> {
  const raw = {
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness') === 'on',
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    speakers: formData.get('speakers'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  };

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create meeting.',
    };
  }

  const {
    date,
    meetingType,
    presiding,
    conducting,
    announcements,
    openingHymnNumber,
    openingHymnTitle,
    openingPrayer,
    wardBusiness,
    stakeBusiness,
    sacramentHymnNumber,
    sacramentHymnTitle,
    speakers,
    closingHymnNumber,
    closingHymnTitle,
    closingPrayer,
  } = parsed.data;

  const meeting = {
    date,
    meetingType,
    presiding,
    conducting,
    announcements: announcements
      ? announcements.split('\n').map((item) => item.trim()).filter(Boolean)
      : [],
    openingHymn: {
      number: openingHymnNumber,
      title: openingHymnTitle,
    },
    openingPrayer,
    wardBusiness: wardBusiness
      ? wardBusiness.split('\n').map((description) => ({
          description: description.trim(),
        })).filter((item) => item.description)
      : [],
    stakeBusiness,
    sacramentHymn: {
      number: sacramentHymnNumber,
      title: sacramentHymnTitle,
    },
    speakers: speakers
      ? speakers
          .split('\n')
          .map((line): SpeakerItem => {
            const [name, topic, type = 'speaker'] = line.split('|');

            return {
              name: name?.trim() ?? '',
              topic: topic?.trim() ?? '',
              type:
                type?.trim() === 'musical-number'
                  ? 'musical-number'
                  : 'speaker',
            };
          })
          .filter((speaker) => speaker.name)
      : [],
    closingHymn: {
      number: closingHymnNumber,
      title: closingHymnTitle,
    },
    closingPrayer,
  };

  try {
    await addMeeting(meeting);
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error('Failed to create meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}


export async function updateMeeting(
  id: number,
  prevState: State,
  formData: FormData
): Promise<State> {
  const raw = {
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    announcements: formData.get('announcements'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    openingPrayer: formData.get('openingPrayer'),
    wardBusiness: formData.get('wardBusiness'),
    stakeBusiness: formData.get('stakeBusiness') === 'on',
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    speakers: formData.get('speakers'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
    closingPrayer: formData.get('closingPrayer'),
  };

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to update meeting.',
    };
  }

  const {
    date,
    meetingType,
    presiding,
    conducting,
    announcements,
    openingHymnNumber,
    openingHymnTitle,
    openingPrayer,
    wardBusiness,
    stakeBusiness,
    sacramentHymnNumber,
    sacramentHymnTitle,
    speakers,
    closingHymnNumber,
    closingHymnTitle,
    closingPrayer,
  } = parsed.data;

  const meeting = {
    date,
    meetingType,
    presiding,
    conducting,
    announcements: announcements
      ? announcements
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean)
      : [],
    openingHymn: {
      number: openingHymnNumber,
      title: openingHymnTitle,
    },
    openingPrayer,
    wardBusiness: wardBusiness
      ? wardBusiness
          .split('\n')
          .map((description) => ({
            description: description.trim(),
          }))
          .filter((item) => item.description)
      : [],
    stakeBusiness,
    sacramentHymn: {
      number: sacramentHymnNumber,
      title: sacramentHymnTitle,
    },
    speakers: speakers
      ? speakers
          .split('\n')
          .map((line): SpeakerItem => {
            const [name, topic, type = 'speaker'] = line.split('|');

            return {
              name: name?.trim() ?? '',
              topic: topic?.trim() ?? '',
              type:
                type?.trim() === 'musical-number'
                  ? 'musical-number'
                  : 'speaker',
            };
          })
          .filter((speaker) => speaker.name)
      : [],
    closingHymn: {
      number: closingHymnNumber,
      title: closingHymnTitle,
    },
    closingPrayer,
  };

  try {
    const updatedMeeting = await updateMeetingInDatabase(id, meeting);

    if (!updatedMeeting) {
      return {
        message: 'Meeting not found. Failed to update meeting.',
      };
    }
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error('Failed to update meeting.');
  }

  revalidatePath('/meetings');
  revalidatePath(`/meetings/${id}`);
  redirect('/meetings');
}


export async function deleteMeeting(id: number): Promise<void> {
  try {
    const deleted = await deleteMeetingFromDatabase(id);

    if (!deleted) {
      throw new Error('Meeting not found. Failed to delete meeting.');
    }
  } catch (error) {
    console.error('Database Error:', error);

    throw new Error('Failed to delete meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}