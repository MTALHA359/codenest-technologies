import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-blue-900 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* === Brand Info === */}
        <div>
          <h1 className="text-2xl font-bold uppercase text-blue-600">YourSoftwareHouse</h1>
          <p className="text-sm text-gray-600 mt-3 max-w-sm">
            We build reliable, scalable, and beautiful software products that help you succeed in the digital world.
          </p>
        </div>

        {/* === Navigation Links === */}
        <div>
          <h3 className="font-semibold mb-4 text-blue-500 uppercase">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-blue-600 transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link></li>
          </ul>
        </div>

        {/* === Social Icons === */}
        <div>
          <h3 className="font-semibold mb-4 text-blue-500 uppercase">Follow Us</h3>
          <div className="flex gap-5 text-blue-500 text-lg">
            <a href="#" className="hover:text-blue-700 transition" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* === Bottom Line === */}
      <div className="text-center text-sm text-gray-500 border-t border-blue-100 py-4">
        © {new Date().getFullYear()} YourSoftwareHouse. All rights reserved.
      </div>
    </footer>
  );
}
