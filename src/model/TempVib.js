// Import Mongoose
import mongoose from "mongoose";

// Define the equipment schema
const tempVibSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    default: Date.now, // Sets the default value to the current timestamp
  },
  secretKey: {
    type: String,
    required: true,
  },
  vib: {
    type: String,
    required: true,
  },
  temp: {
    type: String,
    required: true,
  },
});

export default mongoose.models.TempVibs ||
  mongoose.model("TempVibs", tempVibSchema);
