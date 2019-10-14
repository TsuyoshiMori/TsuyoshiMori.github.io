const connect = require("../connect");
let client;
let DB;

const close = () => {
  if (!client) return;
  client.close();
};

const getDB = async (dbName = null) => {
  if (!DB && !dbName) throw new Error("一回もＤＢ指定されたいない！");
  if (DB && !dbName) return DB;
  if (!client)
    try {
      client = await connect.connect();
      DB = client.db(dbName);
      console.log("connect db");
    } catch (err) {
      console.log(err.stack);
    }
  return DB;
};

const setDB = async (dbName = null) => {
  if (!dbName) throw new Error("dbName指定されたいない！");
  DB = null;
  await getDB(dbName);
};

const insert = async (table = null, contants = null) => {
  checkTable(table);
  return await DB.collection(table).insertMany(contants);
};

const update = async (table = null, filter, update, options) => {
  checkTable(table);
  return await DB.collection(table).updateMany(filter, update, options);
};

const checkTable = (table = null) => {
  if (!DB) throw new Error("setDBは事前に実行されたいない！");
  if (!table) throw new Error("tableName指定されたいない！");
};

const remove = async (table = null) => {
  if (!table) throw new Error("tableName指定されたいない！");
  if (!DB) throw new Error("setDBは事前に実行されたいない！");
  const col = DB.collection(table);
};

const select = async (
  table = null,
  i_query = null,
  i_fields = null,
  i_limit = null
) => {
  if (!table) throw new Error("tebleName 指定されたいない！");
  if (!DB) throw new Error("setDBは事前に実行されたいない！");

  const query = i_query || {};
  const fields = i_fields || {};
  const limit = i_limit || 0;
  return await DB.collection(table)
    .find(query)
    .project(fields)
    .limit(limit)
    .toArray();
};

module.exports = {
  setDB,
  select,
  insert,
  update,
  remove,
  close
};
