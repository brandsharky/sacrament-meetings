"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav classaria-label="Main navigation" className="flex gap-6 print:hidden">
      <Link href="/" className={pathname === '/' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
      <Link href="/meetings" className={pathname === '/meetings' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/meetings' ? 'page' : undefined}>Meetings</Link>
      <Link href="/meetings/current" className={pathname === '/meetings/current' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/meetings/current' ? 'page' : undefined}>Current Meetings</Link>
      <Link href="/login" className={pathname === '/login' ? 'font-bold underline' : 'hover:underline'} aria-current={pathname === '/login' ? 'page' : undefined}>Login</Link>
    </nav>
  );
}