// "use client";

// import { useEffect, useState } from "react";

// export default function AdminContactsPage() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       const res = await fetch("/api/admin/contacts");
//       const data = await res.json();
//       setContacts(data);
//     };
//     fetchContacts();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">All Contacts</h1>
//       {contacts.length === 0 ? (
//         <p>No contacts found.</p>
//       ) : (
//         <div className="space-y-4">
//           {contacts.map((c) => (
//             <div key={c._id} className="bg-white p-4 rounded shadow">
//               <p><strong>Name:</strong> {c.name}</p>
//               <p><strong>Email:</strong> {c.email}</p>
//               <p><strong>Message:</strong> {c.message}</p>
//               <p className="text-sm text-gray-500">
//                 Sent: {new Date(c.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Create this file if not already
import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const dynamic = 'force-dynamic'; // Required to ensure dynamic behavior

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
