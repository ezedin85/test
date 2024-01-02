const express = require('express');
const app = express();
const port = 3001;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Worlda!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
