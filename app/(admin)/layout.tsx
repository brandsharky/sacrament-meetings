import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { signOutAction } from '@/lib/actions';



export default async function AdminLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <>
      <header className="flex items-center justify-between border-b px-6 py-4">
        <p className="font-semibold">Meeting Management</p>

        <form action={signOutAction}>
          <button
            type="submit"
            className="rounded-lg border px-4 py-2 font-semibold"
          >
            Sign Out
          </button>
        </form>
      </header>

      {children}
    </>
  );
}