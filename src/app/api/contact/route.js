import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/ContactMessage';
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await dbConnect();
    await Contact.create({ name, email, message });

    return NextResponse.json({ success: true, message: 'Message saved' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to save message' }, { status: 500 });
  }
}
