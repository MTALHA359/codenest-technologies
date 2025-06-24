
'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const heroTitle = 'CODENEST              TECHNOLOGIES';

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-white text-black px-6 group">
      {/* === Hero Section === */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-20 gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest flex flex-wrap">
            {heroTitle.split('').map((char, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-lg text-gray-700">
            Empowering businesses with powerful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-400 rounded-md w-full sm:w-auto focus:outline-black"
            />
            <button className="bg-black text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:w-1/2 transition-all duration-700 transform group-hover:-translate-x-6">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Office"
            className="rounded-xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* === Our Team Section === */}
       {/* <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 uppercase">
          Driving Innovation Forward
        </h2>
        <p className="text-center text-gray-600 mb-12">Meet our expert team members</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow hover:shadow-lg p-6 rounded-xl text-center transition"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">John Doe {i + 1}</h3>
              <p className="text-sm text-gray-600">Senior Developer</p>
            </div>
          ))}
        </div>
      </section> */}
<section className="py-20">
  <h2 className="text-3xl font-bold text-center mb-4 text-blue-600 uppercase">
    Driving Innovation Forward
  </h2>
  <p className="text-center text-gray-600 mb-12">Meet our expert team members</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        name: 'MR.SAAD',
        role: 'MERN STACK',
        image: '/team/saad.jpg',
      },
      {
        name: 'MR.TALHA',
        role: 'Senior Developer',
        image: '/team/talha.jpg',
      },
      {
        name: 'MR.NOUMAN',
        role: 'Project Manager',
        image: '/team/sir.jpg',
      },
    ].map((member, i) => (
      <div
        key={i}
        className="bg-white shadow hover:shadow-lg rounded-xl overflow-hidden transition"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-72 object-cover" // Full image, no crop
        />
        <div className="p-6 text-center">
          <h3 className="font-bold text-lg text-black">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      
    </main>
  );
}
