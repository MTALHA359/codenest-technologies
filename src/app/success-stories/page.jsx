export default async function SuccessStoriesPage() {
  let stories = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/success-stories`, {
      cache: 'no-store',
    });
    const data = await res.json();
    if (Array.isArray(data)) {
      stories = data;
    }
  } catch (err) {
    console.error('Fetch error:', err.message);
  }

  return (
    <main className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Success Stories</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        We’ve helped dozens of companies grow fast and build powerful products through innovative web, mobile, and AI solutions.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {stories.map((story, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl shadow-md transition duration-300 cursor-pointer bg-white hover:bg-blue-600 hover:text-white"
          >
            <h2 className="text-2xl font-semibold group-hover:text-white text-blue-700 mb-2">
              {story.title}
            </h2>
            <p className="text-sm text-gray-500 group-hover:text-gray-200 mb-1">
              {story.category} | Client: {story.client}
            </p>
            <p className="text-gray-700 group-hover:text-white mb-3">{story.summary}</p>
            <p className="text-sm font-medium text-green-700 group-hover:text-green-300">
              📈 Result: {story.result}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
