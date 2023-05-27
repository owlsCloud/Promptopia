import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // * sets mongoose options
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo is connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
