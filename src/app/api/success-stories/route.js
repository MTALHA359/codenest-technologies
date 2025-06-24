// import dbConnect from '@/lib/dbConnect';
import { dbConnect } from '@/lib/dbConnect';

import SuccessStory from '@/models/SuccessStory';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const stories = await SuccessStory.find().sort({ createdAt: -1 });
    return NextResponse.json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
  }
}
