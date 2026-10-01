import { LoginForm } from '@/components/login-form';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <section className="flex justify-center py-4 sm:py-10">
      <div className="w-full max-w-md rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-10">
        <p className="text-sm font-medium uppercase tracking-widest text-sage-600">
          Welcome back
        </p>
        <h1 className="mt-2 text-3xl font-semibold">Sign In</h1>
        <p className="mt-2 text-sm text-muted">
          Sign in to create and manage sacrament meeting programs.
        </p>

        <LoginForm />
      </div>
    </section>
  );
}