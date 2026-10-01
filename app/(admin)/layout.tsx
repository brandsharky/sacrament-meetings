import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { signOutAction } from '@/lib/actions';



export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between gap-4 rounded-2xl border border-sage-200 bg-sage-50 px-5 py-3 print:hidden">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sage-500" />
          <p className="text-sm font-medium text-sage-900">Meeting Management</p>
        </div>

        <form action={signOutAction}>
          <button
            type="submit"
            className="rounded-full border border-sage-300 bg-surface px-4 py-1.5 text-sm font-semibold text-sage-800 transition-colors hover:bg-sage-100"
          >
            Sign Out
          </button>
        </form>
      </div>

      {children}
    </>
  );
}