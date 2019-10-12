const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "insertMany";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const client = new MongoClient(url, option);

(async function() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    console.log(`set use db to ${dbName}`);

    // Get the collection
    const col = db.collection("find");
    console.log(`set use teble to find`);

    // Insert multiple documents
    const r = await col.insertMany([
      {
        item: "journal",
        status: "A",
        size: { h: 14, w: 21, uom: "cm" },
        instock: [{ warehouse: "A", qty: 5 }]
      },
      {
        item: "notebook",
        status: "A",
        size: { h: 8.5, w: 11, uom: "in" },
        instock: [{ warehouse: "C", qty: 5 }]
      },
      {
        item: "paper",
        status: "D",
        size: { h: 8.5, w: 11, uom: "in" },
        instock: [{ warehouse: "A", qty: 60 }]
      },
      {
        item: "planner",
        status: "D",
        size: { h: 22.85, w: 30, uom: "cm" },
        instock: [{ warehouse: "A", qty: 40 }]
      },
      {
        item: "postcard",
        status: "A",
        size: { h: 10, w: 15.25, uom: "cm" },
        instock: [{ warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 }]
      }
    ]);

    // Get first two documents that match the query
    // const docs = await col
    //   .find({ a: 1 })
    //   .limit(2)
    //   .toArray();
    // assert.equal(2, docs.length);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
