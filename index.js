// Setup
const express = require('express')
const app = express();
const port = 3000; // usually Windows 3000, Mac 5000

// Connection to DB

// Middleware


// ROUTES
app.get('/', (req, res) => {
  res.send("Hello Express!")
})

app.get('/express', (req, res) => {
  res.send('Creating routes with Express is simple')
})

app.get('/user', (req, res) => {
  res.send('Received a GET request from the user')
})

// POST route
app.post('/user', (req, res) => {
  res.send('Received a POST request from the user')
})

// Regular expressions
app.get('/ab?cd', (req, res) => {
  res.send('the question mark will get here with acd or abcd')
})

// Route Parameters
app.get('/user/:id', (req, res) => {
  res.send(`Navigated to user page for ${req.params.id}`)
})

app.get('/user/:id/profile', (req, res) => {
  res.send(`Navigated to user profile page for user ${req.params.id}`)
})

app.get('/user/:id/profile/:data', (req, res) => {
  res.send(`Navigated to user profile page for ${req.params.id} with the data ${req.params.data}`)
})

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
app.listen(port, ()=> {
  console.log(`The server is listening on port ${port}`);
})