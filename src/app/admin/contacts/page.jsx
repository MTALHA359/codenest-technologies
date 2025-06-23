"use client";

import { useEffect, useState } from "react";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      setContacts(data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Contacts</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <div key={c._id} className="bg-white p-4 rounded shadow">
              <p><strong>Name:</strong> {c.name}</p>
              <p><strong>Email:</strong> {c.email}</p>
              <p><strong>Message:</strong> {c.message}</p>
              <p className="text-sm text-gray-500">
                Sent: {new Date(c.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
