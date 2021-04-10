const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Enter name of exercise completed"
  },
  duration: {
    type: Number,
    required: "Enter duration of workout"
  },
  weight: {
    type: Number,
    required: "Enter weight used in workout"
  },
  reps: {
    type: Number,
    required: "Enter the number of reps done her set"
  },
  sets: {
    type: Number,
    required: "Enter the amount of sets completed"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;