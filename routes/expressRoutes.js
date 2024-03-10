// Router example

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Creating routes with Express is simple')
})

module.exports = router;