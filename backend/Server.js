const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const userRoutes = require("./Routes/userRoute");
const categoryRoutes = require("./Routes/categoryRoute");
const gigRoutes = require("./Routes/gigRoute");
const orderRoutes = require("./Routes/orderRoute");
const bodyParser = require("body-parser");
const Web3 = require("web3");
const configuration = require("../smartContract/build/contracts/DecentralizedPlatform.json");
const cron = require("node-cron");
dotenv.config();
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
require("./DB/connection");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "30mb" }));
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/gig", gigRoutes);
app.use("/api/v1/order", orderRoutes);
server.listen(process.env.PORT || 3001, () => {
  console.log(`Server Running on ${process.env.PORT} Port`);
});
