'use client';
import { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, Brain, Cloud, ShieldCheck } from 'lucide-react';

const products = [
  {
    title: 'Web Development',
    desc: 'Custom websites, portals, and dashboards tailored to your business.',
    icon: Monitor,
  },
  {
    title: 'Mobile Applications',
    desc: 'iOS & Android apps with smooth UI and real-time features.',
    icon: Smartphone,
  },
  {
    title: 'AI Solutions',
    desc: 'We build chatbots, recommenders, and smart systems using AI.',
    icon: Brain,
  },
  {
    title: 'Cloud Services',
    desc: 'Deploy, scale, and manage with AWS, Azure, and cloud-native tools.',
    icon: Cloud,
  },
  {
    title: 'Security & Compliance',
    desc: 'Protect your data with secure authentication, backups, and audits.',
    icon: ShieldCheck,
  },
];

function useInView(ref) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);
  return isVisible;
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4 text-blue-600">
          Our Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the range of high-quality services and products we deliver for your business success.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const Icon = product.icon;
          const cardRef = useRef(null);
          const inView = useInView(cardRef);

          return (
            <div
              key={index}
              ref={cardRef}
              className={`group bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center 
                          transition duration-500 ease-out transform
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                          hover:bg-blue-600 hover:text-white hover:shadow-xl hover:-translate-y-1`}
            >
              <Icon
                size={36}
                className="mx-auto mb-4 text-blue-600 group-hover:text-white transition-colors duration-300"
              />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-sm transition-colors duration-300">{product.desc}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
