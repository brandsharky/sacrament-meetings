'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';



export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          minLength={6}
          required
          className="mt-1 w-full rounded-lg border px-4 py-2"
        />
      </div>

      <button
        aria-disabled={isPending}
        type="submit"
        className="rounded-lg border px-4 py-2 font-semibold"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>

      {errorMessage && (
        <p role="alert" className="text-red-600">
          {errorMessage}
        </p>
      )}
    </form>
  );
}