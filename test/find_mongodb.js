var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

MongoClient.connect(url, option, function(err, client) {
  if (err) throw err;
  var db = client.db("admin");
  let key = { name: "Company Inc" };
  //key = { job: "IT" };
  // ----------------------------------------------------------------------
  // INSERT
  // ----------------------------------------------------------------------
  db.collection("test1")
    .find(key)
    .toArray((err, res) => {
      if (err) throw err;
      console.log(res);
      client.close();
    });
});
