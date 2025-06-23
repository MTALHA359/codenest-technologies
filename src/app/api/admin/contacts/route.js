


import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const contacts = await Contact.find().sort({ createdAt: -1 });

  return NextResponse.json(contacts, {
    status: 200,
  });
}
