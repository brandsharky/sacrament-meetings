export default function Loading() {
  return (
    <div
      className="flex min-h-48 flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-2 border-sage-200 border-t-sage-600 motion-reduce:animate-none"
      />
      <p className="text-sm text-muted">Loading meetings...</p>
    </div>
  );
}