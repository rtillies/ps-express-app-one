/* SETUP */
const express = require('express')
const app = express();
const port = 3000; // usually Windows 3000, Mac 5000

// Require routes from routes folder
const studentRoutes = require('./routes/studentRoutes')
const expressRoutes = require('./routes/expressRoutes')
const userRoutes = require('./routes/userRoutes')
const regexRoutes = require('./routes/regexRoutes')
const learnerRoutes = require('./routes/learnerRoutes')
const cookieRoutes = require('./routes/cookieRoutes')

/* DATABASE CONNECTION */


/* MIDDLEWARE */
// serve static files from the styles directory
app.use(express.static("./styles"));

// require the filesystem module
// define the template engine
const fs = require("fs");
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});


const logReq = (req, res, next) => {
  console.log(` Request received`);
  next()
}
app.use(logReq)

// Use Router Middleware - 
// app.use(rootPath, fileInRoutesDirectory)
app.use('/student', studentRoutes)
app.use('/user', userRoutes)
app.use('/express', expressRoutes)
app.use('/regex', regexRoutes)
app.use('/learner', learnerRoutes)
app.use('/cookie', cookieRoutes)

// error handling
// always 4 arguments: err, req, res, next
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

/* ROUTES - no router needed */
app.get('/', (req, res) => {
  res.send("Default GET route, no router")
})

// Listen to the port
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
})