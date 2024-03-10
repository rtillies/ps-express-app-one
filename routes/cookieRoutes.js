// Cookies using cookie-parser package

const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser') // install package

router.use(cookieParser()) // third party middleware

router.get('/', (req, res) => {
	console.log('Cookies:', req.cookies);
	console.log('Signed Cookies:', req.signedCookies);
	res.send('I used cookies!')
})
  
module.exports = router;