import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10'],
  },
  {
    id: 2,
    date: '2026-09-13',
    meetingType: 'regular',
    presiding: 'Bishop Budge',
    conducting: 'Brother Dow',
    openingHymn: { number: 249, title: 'Called to Serve' },
    openingPrayer: 'Brother Abbott',
    wardBusiness: [{ description: "Sustaining of new Young Women's Presidency" }],
    stakeBusiness: false,
    sacramentHymn: { number: 191, title: 'Behold the Great Redeemer Die' },
    speakers: [
      { name: 'Brother Johanson', topic: 'Sacrament', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' },
      { name: 'Elder Hull', topic: 'Mission Farewell', type: 'speaker' },
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Sister Abbott',
    announcements: ['Stake youth activity Wednesday at the Stake Center'],
  },
  {
    id: 3,
    date: '2026-09-20',
    meetingType: 'regular',
    presiding: 'President Brown',
    conducting: 'Brother Lanier',
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Brother Lee',
    wardBusiness: [{ description: 'Releasing of Elder\'s Quorem Presidency' }],
    stakeBusiness: false,
    sacramentHymn: { number: 175, title: 'O God, the Eternal Father' },
    speakers: [
      { name: 'Sister Veirs', topic: 'Overcoming Trials', type: 'speaker' },
      { name: 'Brother Crane', topic: 'Waiting for an Answer', type: 'speaker' },
    ],
    closingHymn: { number: 193, title: 'I Stand All Amazed' },
    closingPrayer: 'Sister Lee',
    announcements: ['Splitting of this ward into two new wards'],
  },
  {
    id: 4,
    date: '2026-09-27',
    meetingType: 'stake',
    presiding: 'President Mills',
    conducting: 'President Parker',
    openingHymn: { number: 134, title: 'I Believe in Christ' },
    openingPrayer: 'Sister Cripps',
    wardBusiness: [{ description: 'Absorbing of Camden Branch into Scarton Ward' }],
    stakeBusiness: false,
    sacramentHymn: { number: 188, title: 'Thy Will, O Lord, Be Done' },
    speakers: [
      { name: 'President Brown', topic: 'Faith During Times of Difficulty', type: 'speaker' },
      { name: 'Stake Choir', topic: 'Sacrament', type: 'musical-number' },
      { name: 'President Mills', topic: 'This Importance of Listening', type: 'speaker' },
      { name: 'Stake Choir', topic: 'Restoration', type: 'musical-number' },
    ],
    closingHymn: { number: 308, title: 'Love One Another' },
    closingPrayer: 'Brother Cripps',
    announcements: ['Stake Young Women\'s camping trip to Big Bear this Saturday'],
  },
  {
    id: 5,
    date: '2026-10-04',
    meetingType: 'testimony',
    presiding: 'Elder Causse',
    conducting: 'Bishop Kenokin',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Brother van Basten',
    wardBusiness: [{ description: 'Sustaining of new High Preist' }],
    stakeBusiness: false,
    sacramentHymn: { number: 184, title: 'Upon the Cross of Calvary' },
    speakers: [
      { name: 'Brother Kenokin', topic: 'Testimoney', type: 'speaker' },
      { name: 'Brother Yamal', topic: 'Testimoney', type: 'speaker' },
      { name: 'Brother Toshomello', topic: 'Testimoney', type: 'speaker' },
      { name: 'Sister Henry', topic: 'Testimoney', type: 'speaker' },
    ],
    closingHymn: { number: 284, title: 'If You Could High To Kolob' },
    closingPrayer: 'Sister van Basten',
    announcements: ['Building of new temple'],
  }
];


export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter((m) => m.date === date);
  return meetings;
}


export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}