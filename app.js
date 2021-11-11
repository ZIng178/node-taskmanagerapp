require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONOG_URI);
    app.listen(port, console.log(`server is listening on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

// Middleware
// app.use(express.static("./public"));

app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("Task Manager App ");
});

app.use("/api/v1/tasks", tasks);

start();
