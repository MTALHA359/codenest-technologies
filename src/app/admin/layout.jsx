import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.isAdmin) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link href="/admin" className="block hover:text-blue-600">Dashboard</Link>
          <Link href="/admin/contacts" className="block hover:text-blue-600">Contacts</Link>
          <Link href="/admin/users" className="block hover:text-blue-600">Users</Link>
          <Link href="/admin/settings" className="block hover:text-blue-600">Settings</Link>
          <Link href="/api/auth/signout" className="block text-red-600">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
