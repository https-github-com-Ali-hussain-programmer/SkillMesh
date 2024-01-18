const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const server = require("http").createServer(app);
const userRoutes = require("./Routes/userRoute");
const bodyParser = require("body-parser");
dotenv.config();
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
require("./DB/connection");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/user", userRoutes);
server.listen(process.env.PORT || 3001, () => {
  console.log(`Server Running on ${process.env.PORT} Port`);
});

