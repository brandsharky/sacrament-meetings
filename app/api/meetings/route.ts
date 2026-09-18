import { getMeetings } from '@/lib/meetings-db';

export async function GET(request: Request) {
  const meetings = await getMeetings();

  return Response.json(meetings);
}