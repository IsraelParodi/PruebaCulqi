// const MongoClient = require("mongodb").MongoClient;

import { MongoClient } from "mongodb";

class MongoDBConnection {
  private static instance;

  private constructor() {}

  static async getInstance() {
    if (this.instance) {
      return Promise.resolve(this.instance);
    }
    const mongo = new MongoClient(process.env.MONGODB_URI).connect();
    this.instance = (await mongo).db(process.env.MONGODB_DATABASE);
    return this.instance;
  }
}

export default MongoDBConnection;

// module.exports.connect = async function () {
//   if (dbInstance) {
//     return Promise.resolve(dbInstance);
//   }
//   const client = await MongoClient.connect(process.env.MONGODB_URI);
//   dbInstance = client.db(process.env.MONGODB_DATABASE);
//   return dbInstance;
// };
