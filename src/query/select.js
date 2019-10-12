const connect = require("../connect");
const dbName = "insertMany";
let client;

const select = async function() {
  try {
    client = await connect.connect();
    const db = client.db(dbName);

    // Get the collection
    const col = db.collection("find");
    console.log(`set use teble to find`);

    const query = { status: "A" };
    const fields = { item: 1, status: 1, "size.uom": 1 };
    const limit = 0;

    // Get first two documents that match the query
    const docs = await col
      .find(query)
      .project(fields)
      .limit(limit)
      .toArray();
    console.log(docs);
  } catch (err) {
    console.log(err.stack);
  }

}

(async function() {
  try {
    client = await connect.connect();

    const db = client.db(dbName);
    console.log(`set use db to ${dbName}`);

    // Get the collection
    const col = db.collection("find");
    console.log(`set use teble to find`);

    const query = { status: "A" };
    const fields = { item: 1, status: 1, "size.uom": 1 };
    const limit = 0;

    // Get first two documents that match the query
    const docs = await col
      .find(query)
      .project(fields)
      .limit(limit)
      .toArray();
    console.log(docs);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  if (client) client.close();
})();
