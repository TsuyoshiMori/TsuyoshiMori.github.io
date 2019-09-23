const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const assert = require("assert");

/*MongoClient.connect("mongodb://127.0.0.1:27017/Collection", (err, db) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});*/

MongoClient.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true }, (err, client) => {
  if (err) {
      // 接続エラー時の処理
      return;
  }

  // 接続後の処理
  client.close();
});