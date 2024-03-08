## Steps

1. `git init`
2. `npm init -y`
3. `npm i nodemon --save-dev`
4. `npm i express`
5. Create `index.js`
  * `const express = require('express')`
6. Start application
  * `nodemon index.js`
  * prefer to add start script in `package.json`
    * add `"start": "nodemon index.js"` to scripts section
