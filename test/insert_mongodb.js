var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

MongoClient.connect(url, option, (err, client) => {
  if (err) throw err;
  var db = client.db("admin");
  var data = { _id: "wt00001-1-1", name: "Company Inc", address: "Highway 37" };
  // ----------------------------------------------------------------------
  // INSERT
  // ----------------------------------------------------------------------
  db.collection("test1").insertOne(data, (err, res) => {
    if (err) throw err;
    client.close();
    console.log(res.result);
    console.log(res.insertedCount);
    console.log(res.insertedId);
  });
});
