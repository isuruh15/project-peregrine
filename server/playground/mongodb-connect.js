const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb+srv://cjayasanka:123@cluster0-z8pee.mongodb.net/TodoApp?retryWrites=true",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    var db = client.db("TodoApp");

    db.collection("Todos").insertOne(
      {
        text: "something to do",
        completed: false
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert todo", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    client.close();
  }
);
