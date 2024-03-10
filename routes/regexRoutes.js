// Regular expression examples

const express = require('express')
const router = express.Router()

// All regular expression routes
router.get('/', (req, res) => {
  res.send('Regex router')
})

// ? is 0 or 1 of the character
router.get('/ab?c', (req, res) => {
  res.send('<b>ab?c</b>: the question mark will get here with "ac" or "abc"')
})

// + is 1 or more of the character
router.get('/ab+cd', (req, res) => {
  res.send('<b>ab+cd</b>: the plus sign will get here with abcd, abbcd, abbbcd, etc. (unlimited "b" between "a" and "cd")')
})
  
// * is nothing or anything
router.get('/abc*def', (req, res) => {
  res.send('<b>abc*def</b>: the asterisk will get here with abcdef, abcxdef, abcSOMETHINGdef, abc729def, or anything with "abc" in the beginning and "def" at the end')
})
  
// () groups characters together
router.get('/xyz(42)?abc', (req, res) => {
  res.send('<b>xyz(42)?abc</b>: combining parentheses with ? - xyzabc or xyz42abc')
})
  
module.exports = router;