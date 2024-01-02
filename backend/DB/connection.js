const mongoose = require("mongoose");
const { DATABASE_KEY } = process.env;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_KEY);

    console.log("Connected to the MongoDB database");
  } catch (error) {
    console.error("Error connecting to the MongoDB database:", error);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to the database");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongoose connection error:", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from the database");
});

const shutdown = async () => {
  try {
    await mongoose.connection.close();
    console.log("Mongoose disconnected due to application termination");
    process.exit(0);
  } catch (error) {
    console.error("Error during graceful shutdown:", error);
    process.exit(1);
  }
};

["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
  process.on(signal, shutdown);
});

connectToDatabase();
