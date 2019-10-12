const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const client = new MongoClient(url, option);
let opened = false;

const connect = async () => {
  if (opened) return client;
  await open();
  return client;
};

const open = async () => {
  try {
    await client.connect();
    opened = true;
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  }
};

const close = () => {
  client.close();
  opened = false;
};

module.exports = {
  open,
  connect,
  close
};
