"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOutAction } from "@/lib/actions";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current Meetings" },
];

const pill =
  "whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors";
const pillIdle = "text-muted hover:bg-sage-50 hover:text-sage-800";
const pillActive = "bg-sage-100 text-sage-900";

export default function NavLinks({ isLoggedIn }: { isLoggedIn: boolean }) {
  const pathname = usePathname();
  const loginActive = pathname === "/login";

  return (
    <nav
      aria-label="Main navigation"
      className="-mx-1 flex items-center gap-1 overflow-x-auto px-1 pb-3 print:hidden"
    >
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`${pill} ${isActive ? pillActive : pillIdle}`}
          >
            {label}
          </Link>
        );
      })}

      <div className="ml-auto shrink-0">
        {isLoggedIn ? (
          <form action={signOutAction}>
            <button
              type="submit"
              className={`${pill} ${pillIdle} cursor-pointer`}
            >
              Sign out
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            aria-current={loginActive ? "page" : undefined}
            className={`${pill} ${loginActive ? pillActive : pillIdle}`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}