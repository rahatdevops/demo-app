// index.js
const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('This is github CICD Test Site');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

