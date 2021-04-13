const router = require("express").Router();
const path = require('path')
const exerciseRoutes = require("./exerciseRoutes.js");

// as per video
// get, put, post /api/workouts
// get /api/workouts/range

router.use('/', exerciseRoutes);

router.get('/', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname, '../public/index.html'))
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/exercises', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname, '../public/exercise.html'))
  } catch (err) {
      res.status(500).json(err)
  }
})

router.get('/stats', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname, '../public/stats.html'))
  } catch (err) {
      res.status(500).json(err)
  }
})
module.exports = router;
