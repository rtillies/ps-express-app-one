const express = require('express')
const router = express.Router()

// All student routes
router.get('/', (req, res) => {
  res.send("Get random student")
})

router.get('/:id', (req, res) => {
  res.send(`Get specific student with id ${id}`)
})

router.get('/:id/profile', (req, res) => {
  res.send(`Get profile of specific student with id ${id}`)
})

router.post('/user', (req, res) => {
  res.send('Received a GET request from the user')
})

module.exports = router;