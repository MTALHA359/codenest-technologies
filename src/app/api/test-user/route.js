import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  await dbConnect();
  
  const existing = await User.findOne({ email: "admin@example.com" });
  if (existing) {
    return Response.json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash("123456", 10);

  const user = await User.create({
    email: "admin@example.com",
    password: hashedPassword,
    isAdmin: true,
  });

  return Response.json({ message: "Test admin created", user });
}
