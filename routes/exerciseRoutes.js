const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models/workout.js");

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

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
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

router.put("/workouts/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      workout.exercises.push(req.body);
      Workout.updateOne({ _id: req.params.id }, workout, (err, result) => {
        res.json(workout);
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $sort: { day: -1 },
    },
    {
      $limit: 7,
    },
    {
      $sort: { day: 1 },
    },
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ]).exec((error, result) => {
    if (error) {
      res.json(error);
      return;
    }
    res.json(result);
  });
});

module.exports = router;
