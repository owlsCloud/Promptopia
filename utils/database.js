import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // * sets mongoose options
  mongoose.set("strictQuery", true);
  console.log("MongoDB connected");
  if (isConnected) {
    console.log("Mongo is connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Promptopia",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
