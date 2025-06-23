'use client';

import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // 🔥 Import toast

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    toast.dismiss(loadingToast);

    if (res.ok) {
      toast.success('Checked in successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      toast.error(data.error || 'Something went wrong');
    }
  };

  const facilities = [
    { icon: '🏢', title: 'Modern Office Space', desc: 'Ergonomic design, creative meeting rooms, and open collaboration zones.' },
    { icon: '☕', title: 'Free Coffee & Snacks', desc: 'Unlimited coffee, tea, and snacks to keep our team energized.' },
    { icon: '💻', title: 'High-End Equipment', desc: 'Top-notch development machines and multi-monitor setups.' },
    { icon: '🌐', title: 'High-Speed Internet', desc: 'Reliable gigabit fiber network across all workspaces.' },
    { icon: '🔒', title: '24/7 Security', desc: 'CCTV monitoring, biometric access, and secure infrastructure.' },
    { icon: '📍', title: 'Central Location', desc: 'Our office is located in the heart of the city with easy transport access.' },
  ];

  return (
    <main className="bg-white text-black px-6 py-20 space-y-24">
      {/* Add toaster for showing toast messages */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* === Contact Section === */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
        {/* Left: Office Info */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 uppercase">Contact Our Office</h2>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you! Whether you have a question about our services, pricing, or want to collaborate — our team is ready to help.
          </p>
          <div className="text-sm text-gray-600 space-y-2 mt-6">
            <p><strong>📍 Address:</strong> 123 Innovation Street, Tech City</p>
            <p><strong>📞 Phone:</strong> +92 300 1234567</p>
            <p><strong>✉️ Email:</strong> hello@yoursoftwarehouse.com</p>
            <p><strong>🕒 Hours:</strong> Mon - Fri: 9am - 6pm</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 w-full">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Send Us a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-400 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-400 rounded-md"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-400 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* === Facilities Section === */}
      <section className="bg-orange-50 py-16 px-6 rounded-xl max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-orange-600 uppercase mb-10">Our Office Facilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow hover:shadow-md transition border border-orange-100"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-orange-700">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
