const mongoose = require("mongoose");

const connectionString = `mongodb+srv://john:1234@taskmanagerapp.zlqwk.mongodb.net/taskmanagerapp?retryWrites=true&w=majority`;

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
