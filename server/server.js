const express = require('express');

// console.log(express);

// Create our app
const app = express();
const port = 5000;

// Share any files inside the public folder
app.use(express.static('server/public'));

// Listen for network request
// couple of arguments - port, function
app.listen(port, function () {
  // when server is ready call this function
  console.log(`I'm listening ...`, port);
});
