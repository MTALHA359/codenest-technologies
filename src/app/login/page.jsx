'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="p-10 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email" placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password" placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white w-full py-2 mt-2">Login</button>
      </form>
    </div>
  );
}

