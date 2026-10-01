import CreateMeetingForm from '@/components/CreateMeetingForm';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Create',
};


export default function CreateMeetingPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Create Meeting</h1>

      <p className="mt-2 text-gray-600">
        Create a new sacrament meeting program.
      </p>

      <CreateMeetingForm />
    </section>
  );
}