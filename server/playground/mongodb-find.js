const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb+srv://cjayasanka:123@cluster0-z8pee.mongodb.net/TodoApp?retryWrites=true",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    var db = client.db("TodoApp");

    db.collection("Todos")
      .find()
      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );

    client.close();
  }
);
