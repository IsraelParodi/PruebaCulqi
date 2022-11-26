import { IToken } from "../interfaces/IToken";
import MongoDBConnection from "../database/mongodb";
export class TokenService {
  constructor() {}

  static async findOne(token) {
    const db = await MongoDBConnection.getInstance();
    const objToken: IToken = await db
      .collection("tokens")
      .aggregate([{ $match: { token: token } }, { $project: { cvv: 0 } }])
      .toArray();
    return objToken[0];
  }

  static async createToken(objToken) {
    const db = await MongoDBConnection.getInstance();
    await db.collection("tokens").insertOne(objToken);
    return { statusCode: 200, body: objToken };
  }
}
