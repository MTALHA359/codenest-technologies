export default function WebDevelopmentPage() {
  const services = [
    {
      title: 'Business Websites',
      desc: 'Elegant, mobile-first websites to represent your brand online.',
      icon: '💼',
    },
    {
      title: 'eCommerce Solutions',
      desc: 'Secure, fast online stores with payment integration.',
      icon: '🛒',
    },
    {
      title: 'Admin Dashboards',
      desc: 'Custom control panels for managing data and business logic.',
      icon: '📊',
    },
    {
      title: 'Landing Pages',
      desc: 'High-converting landing pages built for speed and conversion.',
      icon: '🚀',
    },
    {
      title: 'Progressive Web Apps',
      desc: 'Offline-capable apps that behave like mobile apps.',
      icon: '📱',
    },
    {
      title: 'Maintenance & Support',
      desc: 'We keep your site running with updates, fixes & backups.',
      icon: '🛠️',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-black px-6 py-20">
      {/* Page Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-blue-700 tracking-wider">
          Web Development
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
          Build lightning-fast, scalable, and visually stunning websites with our expert team.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:text-white relative overflow-hidden"
          >
            {/* Icon circle */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-700 text-2xl mb-6 transition-all group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110">
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 group-hover:text-blue-100 transition duration-300 text-sm">
              {service.desc}
            </p>

            {/* Animated glow border on hover */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-all duration-700 bg-gradient-to-br from-blue-200 to-blue-600 blur-2xl"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
