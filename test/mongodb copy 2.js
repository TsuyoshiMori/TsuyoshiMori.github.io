var MongoClient = require("mongodb").MongoClient;

// 接続文字列
var url = "mongodb://localhost:27017/admin";

// MongoDB へ 接続

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
MongoClient.connect(url, option, (error, client) => {
  // 接続メッセージを表示
  if (error) return console.log(error);
  console.log("MongoDB へ 接続中...");
  var db = client.db("admin");

  // コレクションにドキュメントを挿入
  /*collection.insertOne(
    {
      name: "Hack MongoDB",
      price: 1280
    },
    (error, result) => {
      db.close();
    }
  );*/
  console.log("db", db.DB);
  // MongoDB への 接続 を 切断
  //db.close();
});
