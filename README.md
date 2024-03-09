# Introduction to Express

## Steps to install Node and Express

1. `git init` - create repository from directory
2. `npm init -y` - initialize Node
3. `npm i nodemon --save-dev` - add nodemon dependency
  * `npm install -g nodemon` for global installation
4. `npm i express` - install express
5. Create `index.js`
  * `const express = require('express')`
6. Start application
  * `nodemon index.js`
  * prefer to add start script in `package.json`
    * add `"start": "nodemon index.js"` to scripts section

## Typical Setup

1. Setup
  * `const express = require('express')`
  * `const app = express();`
  * `const port = 3000; // usually Windows 3000, Mac 5000`
2. Connection to database
3. Middleware
  * `app.use()`
  * Order matters!
4. Routes
  * `app.get()`
  * `app.post()`
  * `app.put()`
  * Use routers for organization
5. Listen port
  * `app.listen()`