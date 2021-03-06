import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./data/users.js";
import products from "./data/products.js";

import connectDB from "./config/db.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

//Initialize dotenv
dotenv.config();

//Connect database
connectDB();

const importData = async () => {
  try {
    //Delete everything before putting data into the database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //Add data to the database
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported");

    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //Delete everything
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed");

    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
