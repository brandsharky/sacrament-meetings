import Link from "next/link";
import { auth } from "@/auth";



// Renders a "Create meeting" link, but only for signed-in users.
export default async function CreateMeetingButton() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <Link
      href="/meetings/create"
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sage-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-800"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        +
      </span>
      Create meeting
    </Link>
  );
}