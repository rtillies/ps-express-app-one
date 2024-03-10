// GET and POST routes

const express = require('express')
const router = express.Router()

// All user routes
router.get('/', (req, res) => {
  res.send('Received a GET request from the user')
})

// POST route
// use Postman to get result
// http://localhost:3000 (or correct port number)
router.post('/', (req, res) => {
  res.send('Received a POST request from the user')
})

// Route Parameters
router.get('/:id', (req, res) => {
  res.send(`Navigated to user page for ${req.params.id}`)
})

router.get('/:id/profile', (req, res) => {
  res.send(`Navigated to user profile page for user ${req.params.id}`)
})

router.get('/:id/profile/:data', (req, res) => {
  res.send(`Navigated to user profile page for ${req.params.id} with the data ${req.params.data}`)
})

module.exports = router;