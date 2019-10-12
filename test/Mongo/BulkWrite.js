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

    // Get the collection
    const col = db.collection('bulk_write');

    const r = await col.bulkWrite([
        { insertOne: { document: { a: 1 } } },
        { updateOne: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } },
        { updateMany: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } },
        { deleteOne: { filter: {c:1} } },
        { deleteMany: { filter: {c:1} } },
        { replaceOne: { filter: {c:3}, replacement: {c:4}, upsert:true}}
      ],
      {ordered:true, w:1}
    );
    assert.equal(1, r.insertedCount);
    assert.equal(1, Object.keys(r.insertedIds).length);
    assert.equal(1, r.matchedCount);
    assert.equal(0, r.modifiedCount);
    assert.equal(0, r.deletedCount);
    assert.equal(2, r.upsertedCount);
    assert.equal(2, Object.keys(r.upsertedIds).length);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
