export default async function EditMeetingPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-3xl font-bold">Edit Meeting</h1>
      <p className="mt-2 text-gray-600">
        Editing meeting {id} — Coming in Week 04.
      </p>
    </section>
  );
}