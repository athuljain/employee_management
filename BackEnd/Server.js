const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Connection to database failed:", error);
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
