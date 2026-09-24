import { getMeetings } from '@/lib/meetings-db';

export async function GET() {
  const meetings = await getMeetings();

  return Response.json(meetings);
}