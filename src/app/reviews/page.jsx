
'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ReviewsPage() {
  const stats = [
    { label: 'Years of Experience', value: 11, suffix: '+' },
    { label: 'Conversion Rate', value: 95, suffix: '%' },
    { label: 'Projects Delivered', value: 500, suffix: '+' },
    { label: 'Client Satisfaction', value: 95, suffix: '%' },
  ];

  const reviews = [
    {
      name: 'Sarah Ahmed',
      role: 'CEO, TechGenix',
      feedback:
        'Their team delivered a robust solution tailored to our business. Great communication and timely delivery!',
    },
    {
      name: 'Usman Khan',
      role: 'Founder, EduNext',
      feedback:
        'Excellent experience! We saw a 60% increase in user engagement after our product revamp with their help.',
    },
    {
      name: 'Areeba Noor',
      role: 'Marketing Lead, FinPlus',
      feedback:
        'The professionalism and creativity were top-notch. Highly recommend for SaaS platforms!',
    },
  ];

  const clients = ['Meta', 'Google', 'Telenor', 'Bykea', 'Careem', 'Xfinity'];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <main className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">We make your business shine</h1>
        <p className="text-gray-700">
          We collaborate with clients to fully grasp their vision, audience, and specific needs,
          crafting bespoke software solutions that fuel innovation and success.
        </p>
      </section>

      {/* Stats Section */}
      <section ref={ref}>
        <h2 className="text-xl text-center font-semibold mb-6">
          Our outcomes showcase our commitment to success.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold text-black">
                {inView && <CountUp end={stat.value} duration={2.5} />}
                {stat.suffix}
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-xl bg-white text-black border shadow-md text-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl cursor-pointer"
            >
              <div className="text-3xl mb-4 group-hover:text-white transition">💬</div>
              <p className="italic mb-4 group-hover:text-white transition">“{review.feedback}”</p>
              <p className="font-semibold group-hover:text-white transition">{review.name}</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition">{review.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, idx) => (
            <span key={idx} className="text-lg font-semibold text-gray-600">
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Success Stories / Our Work */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-4">
          From startups to enterprises, we’ve built powerful web platforms, CRMs, mobile apps, and
          internal systems that drive growth. Each project is a partnership, not a transaction.
        </p>

        {/* ✅ Button Link to /success-stories */}
        <div className="mt-8">
          <Link
            href="/success-stories"
            className="inline-block text-blue-600 font-semibold hover:underline transition"
          >
            See Our Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Client Quotes */}
      <section className="bg-gray-100 py-12 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-8">Client Messages</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <blockquote className="text-lg italic text-gray-800">
            “They truly understood our business needs and delivered a custom platform that exceeded
            expectations.”
          </blockquote>
          <blockquote className="text-lg italic text-gray-800">
            “Their support, speed, and quality are unmatched. We now have an app that our users
            love.”
          </blockquote>
        </div>
      </section>
    </main>
  );
}
