'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';



const inputStyles =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground transition-colors placeholder:text-muted/70 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200";

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-sage-900">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-sage-900">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          minLength={6}
          required
          className={inputStyles}
        />
      </div>

      {errorMessage && (
        <p
          role="alert"
          className="rounded-xl border border-[#e6cbbf] bg-[#faeee8] px-4 py-3 text-sm text-[#9a4a3a]"
        >
          {errorMessage}
        </p>
      )}

      <button
        aria-disabled={isPending}
        type="submit"
        className="w-full rounded-full bg-sage-700 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-sage-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}