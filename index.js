// Setup
const express = require('express')
const app = express();
const port = 3000; // usually Windows 3000, Mac 5000

const cookieParser = require('cookie-parser') // install package

// Require routes from routes folder
const studentRoutes = require('./routes/studentRoutes')
const expressRoutes = require('./routes/expressRoutes')
const userRoutes = require('./routes/userRoutes')
const regexRoutes = require('./routes/regexRoutes')

// const fs = require('fs')
// app.engine('perscholas', (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(err)
//   })
//   const rendered = content
//     .toString()
//     .replaceAll()
// })

// app.set()

// Connection to DB

// Middleware
app.use(cookieParser()) // third party middleware

const logReq = (req, res, next) => {
  console.log(` Request received`);
  next()
}

app.use(logReq)

// Use Router
app.use('/student', studentRoutes)
app.use('/user', userRoutes)
app.use('/express', expressRoutes)
app.use('/regex', regexRoutes)


// error handling
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

// ROUTES
app.get('/', (req, res) => {
  // res.send("Hello Express!")
  console.log('Cookies:', req.cookies);
  console.log('Cookies:', req.signedCookies);
  // res.send("I used cookies!")
  res.send("Default GET route, no router")
})

// app.get('/express', (req, res) => {
//   res.send('Creating routes with Express is simple')
// })

// app.get('/user', (req, res) => {
//   res.send('Received a GET request from the user')
// })

// // POST route
// app.post('/user', (req, res) => {
//   res.send('Received a POST request from the user')
// })

// // Regular expressions
// app.get('/ab?cd', (req, res) => {
//   res.send('the question mark will get here with acd or abcd')
// })

// // Route Parameters
// app.get('/user/:id', (req, res) => {
//   res.send(`Navigated to user page for ${req.params.id}`)
// })

// app.get('/user/:id/profile', (req, res) => {
//   res.send(`Navigated to user profile page for user ${req.params.id}`)
// })

// app.get('/user/:id/profile/:data', (req, res) => {
//   res.send(`Navigated to user profile page for ${req.params.id} with the data ${req.params.data}`)
// })

// Chainable Route Handlers
app.route('/learner')
  .get((req, res) => {
    res.send("Get a random learner")
  })
  .post((req, res) => {
    res.send("Add a new learner")
  })
  .put((req, res) => {
    res.send("Update a learner")
  })


// Listen to the port
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
})