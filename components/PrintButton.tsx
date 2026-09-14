"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.print()
      }}
      className="rounded-md bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800"
    >
      Print Program
    </button>
  );
}