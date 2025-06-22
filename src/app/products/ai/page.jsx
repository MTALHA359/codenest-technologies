export default function AISolutionsPage() {
  const aiServices = [
    {
      title: 'Custom AI Models',
      desc: 'We build tailored AI/ML models trained on your business data to solve real-world problems.',
      icon: '🧠',
    },
    {
      title: 'Chatbots & Assistants',
      desc: 'Smart virtual assistants powered by natural language processing and OpenAI APIs.',
      icon: '🤖',
    },
    {
      title: 'Predictive Analytics',
      desc: 'Forecast trends and automate decisions using data science and deep learning.',
      icon: '📊',
    },
    {
      title: 'Image & Video Recognition',
      desc: 'Build computer vision apps for object detection, OCR, face ID, and more.',
      icon: '🖼️',
    },
    {
      title: 'Voice AI & Speech-to-Text',
      desc: 'Convert speech to text, detect sentiment, and power voice-enabled systems.',
      icon: '🎙️',
    },
    {
      title: 'AI Automation Systems',
      desc: 'Integrate AI into your workflows to automate repetitive business tasks.',
      icon: '⚙️',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-white text-black px-6 py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-indigo-700 tracking-wider">
          AI Solutions
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
          Smarter, faster, and scalable AI integrations built to give your business an edge.
        </p>
      </section>

      {/* AI Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {aiServices.map((service, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-indigo-700 hover:text-white relative overflow-hidden"
          >
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 text-2xl mb-6 transition-all group-hover:bg-white group-hover:text-indigo-700 group-hover:scale-110">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 group-hover:text-indigo-100 transition duration-300 text-sm">
              {service.desc}
            </p>

            {/* Glow on Hover */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-700 bg-gradient-to-br from-indigo-200 to-indigo-600 blur-2xl"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
