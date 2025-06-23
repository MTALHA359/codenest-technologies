import mongoose from 'mongoose';

const successStorySchema = new mongoose.Schema({
  title: String,
  category: String,
  summary: String,
  result: String,
  client: String,
}, { timestamps: true });

const SuccessStory = mongoose.models.SuccessStory || mongoose.model('SuccessStory', successStorySchema);
export default SuccessStory;
