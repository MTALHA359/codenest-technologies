import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
      source: source || "website",
    });

    console.log("✅ Contact saved:", contact);

    return NextResponse.json({ message: "✅ Message sent successfully!" }, { status: 201 });
  } catch (err) {
    console.error("❌ Contact API error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
