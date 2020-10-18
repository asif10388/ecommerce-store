import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

import productRoutes from "./routes/productRoutes/productRoutes.js";
import userRoutes from "./routes/userRoutes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes/uploadRoutes.js";

import { notfound, errorHandler } from "./middlewares/errorMiddleware.js";

//Initialize dotenv
dotenv.config();

//Initialize Express
const app = express();

//Initialize Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", function (req, res) {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", function (req, res) {
    res.send("Welcome!");
  });
}

//Use Middlewares
app.use(notfound);

app.use(errorHandler);

//Connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  try {
    console.log("200 OK");
  } catch (err) {
    res.json({ message: err });
  }
});
