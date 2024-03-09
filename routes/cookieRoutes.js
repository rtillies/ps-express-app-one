const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	console.log('Cookies:', req.cookies);
	console.log('Cookies:', req.signedCookies);
	res.send('I used cookies!')
})
  
module.exports = router;