"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetings", label: "Meetings" },
  { href: "/meetings/current", label: "Current Meetings" },
  { href: "/login", label: "Login", pushRight: true },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="-mx-1 flex items-center gap-1 overflow-x-auto px-1 pb-3 print:hidden"
    >
      {links.map(({ href, label, pushRight }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              pushRight ? "ml-auto" : ""
            } ${
              isActive
                ? "bg-sage-100 text-sage-900"
                : "text-muted hover:bg-sage-50 hover:text-sage-800"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}