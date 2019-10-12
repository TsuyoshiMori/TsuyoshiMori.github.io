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

    // Use the admin database for the operation
    const adminDb = db.admin();

    // Retrieve the build information using the admin command
    await adminDb.command({ buildInfo: 1 });
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
