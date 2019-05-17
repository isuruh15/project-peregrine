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
      .findOneAndDelete({ _id: new ObjectID("5cde8362c72d110b94c7f539") })
      .then(result => console.log(result));
    client.close();
  }
);
