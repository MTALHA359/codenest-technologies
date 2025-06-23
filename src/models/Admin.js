import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: String,
  password: String, // In real apps, use hashed password!
});

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);
