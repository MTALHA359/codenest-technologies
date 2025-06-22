'use client';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);
  const heading = 'ABOUT OUR COMPANY';

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black px-6 py-20 space-y-24">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest flex flex-wrap">
            {heading.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ease-out ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-gray-700 text-lg mt-4 max-w-lg">
            We’re a passionate team building software that powers businesses worldwide — focused on innovation, quality, and customer success.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?_gl=1*5gj684*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTA2Mjc5OTAkbzE2JGcxJHQxNzUwNjI4MDU5JGo1OSRsMCRoMA.."
            alt="Team"
            className="rounded-xl shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-blue-600 uppercase">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          To deliver high-quality, intelligent, and scalable software solutions that drive business growth and empower people through technology.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 uppercase">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Innovation', 'Integrity', 'Excellence', 'Teamwork', 'Customer Success', 'Growth'].map((value, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-blue-800">{value}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {value === 'Innovation' && 'We constantly seek out new ideas and technologies.'}
                {value === 'Integrity' && 'We are honest, ethical, and trustworthy in everything we do.'}
                {value === 'Excellence' && 'We strive for the highest quality in every detail.'}
                {value === 'Teamwork' && 'We believe in collaboration and shared success.'}
                {value === 'Customer Success' && 'We win when our customers succeed.'}
                {value === 'Growth' && 'We learn, evolve, and never stop improving.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 uppercase">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-lg">
          {['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'AI APIs'].map((tech, i) => (
            <div key={i} className="bg-gray-100 px-5 py-3 rounded-md shadow hover:shadow-lg transition">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-16 px-6 rounded-xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6 uppercase">Why Choose Us?</h2>
        <ul className="space-y-4 max-w-3xl mx-auto list-disc list-inside text-gray-700 text-lg">
          <li>Experienced team of engineers and designers</li>
          <li>Scalable and secure product architecture</li>
          <li>Client-focused communication and support</li>
          <li>End-to-end development, from idea to launch</li>
          <li>On-time delivery with agile project management</li>
        </ul>
      </section>
    </main>
  );
}
