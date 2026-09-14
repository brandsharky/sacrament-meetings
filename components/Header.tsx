export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <header className="border-b bg-white print:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-black">Sacrament Meeting Planner</h1>
          <p className="text-sm text-gray-600">Ward Sacrament Meetings</p>
        </div>

        <p className="text-sm text-gray-600">{currentDate}</p>
      </div>
    </header>
  );
}