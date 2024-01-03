const express = require('express');
const mongoose = require('mongoose');
const hrRoute = require('./routes/hrRoute.js');

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

//HR Route


app.use("/hr",hrRoute)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
