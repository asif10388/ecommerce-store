import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes/productRoutes.js";

import { notfound, errorHandler } from "./middlewares/errorMiddleware.js";

//Initialize dotenv
dotenv.config();

//Initialize Express
const app = express();

//Initialize Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/products", productRoutes);

//Use Middlewares
app.use(notfound);

app.use(errorHandler);

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
