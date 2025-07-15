const express = require("express");

// Create the app but don't listen yet
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export just the Express app (without listening)
module.exports = app;
