const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models/workout");

// as per video
// get, put, post /api/workouts
// get /api/workouts/range

// router.use('/', exerciseRoutes);

router.get("/", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/exercise", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


