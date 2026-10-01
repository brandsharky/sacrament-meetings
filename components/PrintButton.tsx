"use client";



export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.print();
      }}
      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sage-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sage-800 print:hidden"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M6 7V3h8v4" />
        <rect x="3" y="7" width="14" height="7" rx="1.5" />
        <path d="M6 12h8v5H6z" />
      </svg>
      Print Program
    </button>
  );
}