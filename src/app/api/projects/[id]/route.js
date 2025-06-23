import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function DELETE(_, { params }) {
  await dbConnect();
  await Project.findByIdAndDelete(params.id);
  return Response.json({ success: true });
}

export async function PUT(req, { params }) {
  await dbConnect();
  const data = await req.json();
  const updated = await Project.findByIdAndUpdate(params.id, data, { new: true });
  return Response.json(updated);
}
