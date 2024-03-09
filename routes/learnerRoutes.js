const express = require('express')
const router = express.Router()

// Chainable Route Handlers
router.route('/')
  .get((req, res) => {
    res.send("Get a random learner")
  })
  .post((req, res) => {
    res.send("Add a new learner")
  })
  .put((req, res) => {
    res.send("Update a learner")
  })

module.exports = router;