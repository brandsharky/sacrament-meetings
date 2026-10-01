import CreateMeetingForm from '@/components/CreateMeetingForm';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Create',
};


export default function CreateMeetingPage() {
  return (
    <section className="mx-auto max-w-3xl">
      <header>
        <h1 className="text-3xl font-semibold sm:text-4xl">Create Meeting</h1>
        <p className="mt-2 text-muted">
          Create a new sacrament meeting program.
        </p>
      </header>

      <CreateMeetingForm />
    </section>
  );
}