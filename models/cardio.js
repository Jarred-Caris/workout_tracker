const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Enter name of exercise completed"
  },
  duration: {
    type: Number,
    required: "Enter duration of workout"
  },
  distance: {
    type: Number,
    required: "Enter distance covered in workout"
  },
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;