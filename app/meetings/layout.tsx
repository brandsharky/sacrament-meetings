'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MeetingsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();

  return (
    <div>
      <nav aria-label="Meetings navigation" className="mb-8 flex gap-6 border-b pb-4">
        <Link href="/meetings" className={pathname === '/meetings' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/meetings' ? 'page' : undefined}>
          All Meetings
        </Link>

        <Link href="/meetings/current" className={pathname === '/meetings/current' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/meetings/current' ? 'page' : undefined}>
          Current Meeting
        </Link>
      </nav>

      {children}
    </div>
  );
}
