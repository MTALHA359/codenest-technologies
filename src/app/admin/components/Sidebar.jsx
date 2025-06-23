'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const links = [
  { name: "Dashboard", href: "/admin" },
  { name: "Messages", href: "/admin/messages" },
  { name: "Team", href: "/admin/team" },
  { name: "Blogs", href: "/admin/blogs" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <nav className="space-y-2">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded ${
              pathname === link.href ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => signOut()}
        className="mt-10 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
