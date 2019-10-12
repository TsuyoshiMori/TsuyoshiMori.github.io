const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";
const dbName = "myDB";

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

(async function() {
  const client = new MongoClient(url, option);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Get the removes collection
    const col = db.collection("removes");
    let r;

    // Insert multiple documents
    r = await col.insertMany([{ a: 1 }, { a: 2 }, { a: 2 }]);
    assert.equal(3, r.insertedCount);

    // Remove a single document
    r = await col.deleteOne({ a: 1 });
    assert.equal(1, r.deletedCount);

    // Remove multiple documents
    r = await col.deleteMany({ a: 2 });
    assert.equal(2, r.deletedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
  console.log("Close server connecte.");
})();
