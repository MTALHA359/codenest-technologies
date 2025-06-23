import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/Project";

export async function GET() {
  await dbConnect();
  const projects = await Project.find();
  return Response.json(projects);
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const project = await Project.create(body);
  return Response.json(project);
}
