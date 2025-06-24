import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/dbConnect';
import { dbConnect } from "@/lib/dbConnect";

import Admin from '@/models/Admin';

export async function POST(req) {
  const { username, password } = await req.json();

  await dbConnect();
  const admin = await Admin.findOne({ username, password }); // For security, hash passwords!

  if (!admin) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set('admin', admin._id.toString(), {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24,
  });

  return res;
}
