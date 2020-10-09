import express from "express";
import apiRoutes from "./routes/api-routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import products from "./products.js";

//Initialize dotenv
dotenv.config();

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

app.get("/api/products", function (req, res) {
  res.json(products);
});

app.get("/api/products/:id", function (req, res) {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
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
