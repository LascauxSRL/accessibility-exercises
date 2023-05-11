const packageJson = require('./package.json')

const appName = packageJson.description

const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use('/meetup', express.static(path.join(__dirname, 'meetup')));

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}`)
});