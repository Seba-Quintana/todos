import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://lucasgiffuni:<password>@cluster0.7cpgmrl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;