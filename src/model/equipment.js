// Import Mongoose
const mongoose = require("mongoose");

// Define the equipment schema
const equipmentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true, // Ensures that each equipment has a unique ID
  },
  dateCreate: {
    type: Date,
    default: Date.now, // Sets the default value to the current timestamp
  },
  createdBy: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create the Equipment model
const Equipment = mongoose.model("Equipment", equipmentSchema);

// Export the model for use in your Next.js application
module.exports = Equipment;
