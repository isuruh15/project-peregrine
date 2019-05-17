var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://cjayasanka:123@cluster0-z8pee.mongodb.net/TodoApp?retryWrites=true",
  { useNewUrlParser: true }
);

module.exports = { mongoose };
