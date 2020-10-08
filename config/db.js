const mongoose = require("mongoose");

//MongoDB credentials here(if not provided, you'll get an invalid connection string error!)
const db =
  "mongodb+srv://dbUser:bsnmpc1998@ecommercecluster.50hr1.mongodb.net/ecommerceDB?retryWrites=true&w=majority";

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

module.exports = connectDB;
