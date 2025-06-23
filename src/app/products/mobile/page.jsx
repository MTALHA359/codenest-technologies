'use client';

export default function MobileAppsPage() {
  const services = [
    {
      title: 'iOS App Development',
      desc: 'We build fast and secure apps for iPhone and iPad using Swift & React Native.',
      icon: '📱',
    },
    {
      title: 'Android App Development',
      desc: 'Launch your app on the Google Play Store with powerful Android solutions.',
      icon: '🤖',
    },
    {
      title: 'Cross-Platform Apps',
      desc: 'Build once, run everywhere with Flutter or React Native.',
      icon: '🔄',
    },
    {
      title: 'App Prototyping',
      desc: 'Interactive mobile app prototypes to validate your ideas quickly.',
      icon: '🎨',
    },
    {
      title: 'App Maintenance',
      desc: 'We provide ongoing support, bug fixes, and performance improvements.',
      icon: '🔧',
    },
    {
      title: 'App Store Optimization',
      desc: 'Boost app visibility with ASO, keywords, and user engagement strategies.',
      icon: '🚀',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-blue-900 px-6 py-20">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-blue-600 tracking-wider">
          Mobile App Development
        </h1>
        <p className="text-blue-800 max-w-2xl mx-auto mt-4 text-lg">
          We craft high-performance mobile applications that deliver real-world results.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-md border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:text-white relative overflow-hidden"
          >
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-700 text-2xl mb-6 transition-all group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-blue-800 group-hover:text-blue-100 transition duration-300 text-sm">
              {service.desc}
            </p>

            {/* Glow Overlay */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-700 bg-gradient-to-br from-blue-300 to-blue-600 blur-2xl"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
