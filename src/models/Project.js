import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  imageUrl: String,
  liveUrl: String,
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
