const express = require("express");
const dbcoection = require("./config/DB");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/Users");
require("dotenv").config();
app.use(cors());

dbcoection();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRouter);

app.listen(process.env.PORT, (err) => {
  console.log("server is running");
});
