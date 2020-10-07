const express = require("express");
const apiRoutes = require("./routes/api-routes");
const connectDB = require("./config/db");

//Initialize Express
const app = express();

//Initialize Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api", apiRoutes);

//Connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("Welcome!");
});

app.get("*", function (req, res) {
  res.send("404 Not Found!");
});

app.listen(PORT, () => {
  try {
    console.log("200 OK");
  } catch (err) {
    res.json({ message: err });
  }
});
