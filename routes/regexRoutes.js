const express = require('express')
const router = express.Router()

// All regular expression routes
router.get('/ab?cd', (req, res) => {
    res.send('the question mark will get here with acd or abcd')
  })
  
module.exports = router;