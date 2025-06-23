import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.isAdmin) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  await dbConnect();
  const contacts = await Contact.find().sort({ createdAt: -1 });

  return new Response(JSON.stringify(contacts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
