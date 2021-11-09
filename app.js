const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const port = 5000;

// Middleware

app.use(express.json());

//routes

app.get("/hello", (req, res) => {
  res.send("Task Manager App ");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, console.log(`server is listening on ${port}`));
