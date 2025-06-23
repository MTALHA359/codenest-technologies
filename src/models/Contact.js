import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

// Tell Mongoose to use the 'contacts' collection
export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema, "contacts");
