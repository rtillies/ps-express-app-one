## Steps to install Node and Express

1. `git init` - create repository from directory
2. `npm init -y` - initialize Node
3. `npm i nodemon --save-dev` - add nodemon dependency
4. `npm i express` - install express
5. Create `index.js`
  * `const express = require('express')`
6. Start application
  * `nodemon index.js`
  * prefer to add start script in `package.json`
    * add `"start": "nodemon index.js"` to scripts section
