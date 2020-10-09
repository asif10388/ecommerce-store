import mongoose from "mongoose";
import dotenv from "dotenv";

//Initialize dotenv
dotenv.config();

//MongoDB credentials here(if not provided, you'll get an invalid connection string error!)
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
