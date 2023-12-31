// Import Mongoose
import mongoose from "mongoose";

// Define the equipment schema
const equipmentSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: Date.now, // Sets the default value to the current timestamp
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  privateKey: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Equipment ||
  mongoose.model("Equipment", equipmentSchema);
