const packageJson = require('./package.json')

const appName = packageJson.description

const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

app.use('/meetup', express.static(path.join(__dirname, 'meetup')));
app.use('/wildlife', express.static(path.join(__dirname, 'wildlife')));

app.listen(port, () => {
  console.log(`${appName} server is listening on port ${port}`)
});