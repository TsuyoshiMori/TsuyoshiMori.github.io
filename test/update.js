var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

MongoClient.connect(url, option, (err, client) => {
  if (err) throw err;
  var db = client.db("admin");
  var where = { name: "Company Inc" };
  var set = { $set: { address: "update address!" } };
  // ----------------------------------------------------------------------
  // UPDATE
  // ----------------------------------------------------------------------
  db.collection("test1").updateMany(where, set, function(err, result) {
    if (err) throw err;
    console.log("update");
    client.close();
  });
});
