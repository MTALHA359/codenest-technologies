import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/ContactMessage";
export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const contact = await Contact.create(body);
  return Response.json(contact);
}

