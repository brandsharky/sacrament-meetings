'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';



const links = [
  { href: '/meetings', label: 'All Meetings' },
  { href: '/meetings/current', label: 'Current Meeting' },
];

export default function MeetingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <div>
      <nav
        aria-label="Meetings navigation"
        className="mb-8 inline-flex gap-1 rounded-full border border-border bg-surface p-1 print:hidden"
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-sage-100 text-sage-900'
                  : 'text-muted hover:bg-sage-50 hover:text-sage-800'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {children}
    </div>
  );
}