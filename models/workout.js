const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        required: "Enter exercise type",
        type: String,
      },
      name: {
        type: String,
        required: "enter name of exercise",
        trim: true,
      },
      duration: {
        type: Number,
        required: "Enter duration of workout (in minutes)",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { Workout };
