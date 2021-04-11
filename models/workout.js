const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});

const exerciseSchema = new Schema({
  type: {
    required: true,
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: "Enter duration of workout (in minutes)"
  },
  weight: {
    type: Number,
    required: "Enter weight "
  },
  reps: {
    type: Number,
    required: "Enter reps per set"
  },
  sets: {
    type: Number,
    required: "Enter sets completed"
  },
  distance: {
    type: Number,
    required: "Enter distance covered"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { Workout, Exercise };
