import Link from "next/link";



export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between gap-4 py-5 print:hidden">
      <Link href="/" className="group block">
        <p className="font-serif text-xl font-semibold tracking-tight text-sage-900 transition-colors group-hover:text-sage-700 sm:text-2xl">
          Sacrament Meeting Planner
        </p>
        <p className="mt-0.5 text-sm text-muted">Ward Sacrament Meetings</p>
      </Link>

      <p className="hidden shrink-0 rounded-full bg-sage-50 px-3 py-1 text-sm text-sage-800 sm:block">
        {currentDate}
      </p>
    </header>
  );
}