'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">🚀 SoftHouse</Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-black items-center">

          <Link href="/" className="hover:text-orange-600 transition">Home</Link>

          {/* Products with Dropdown */}
          <div className="relative group">
            <button className="hover:text-orange-600 transition">Products</button>

            {/* Dropdown opens on hover */}
            <div className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href="/products/web" className="block px-4 py-2 hover:bg-orange-100">Web Development</Link>
              <Link href="/products/mobile" className="block px-4 py-2 hover:bg-orange-100">Mobile Apps</Link>
              <Link href="/products/ai" className="block px-4 py-2 hover:bg-orange-100">AI Solutions</Link>
            </div>
          </div>

          <Link href="/blogs" className="hover:text-orange-600 transition">Blogs</Link>
          <Link href="/about" className="hover:text-orange-600 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-600 transition">Contact</Link>
        </nav>

        {/* Right: Language Selector */}
        <div className="text-sm">
          <select className="bg-white border border-gray-300 rounded px-2 py-1 text-black">
            <option value="en">EN</option>
            <option value="ur">UR</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>
    </header>
  );
}
