import { getMeetingById } from '@/lib/meetings-db';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params;
  const id = Number(idParam);

  if (Number.isNaN(id)) {
    return Response.json({ error: 'Invalid meeting ID.' }, { status: 400 });
  }

  const meeting = getMeetingById(id);

  if (!meeting) {
    return Response.json({ error: 'Meeting not found.' }, { status: 404 });
  }

  return Response.json(meeting);
}
