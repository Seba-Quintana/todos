import { CardInterface } from "../../interfaces/cardInterface";
import { ObjectId, MongoClient } from "mongodb";


export default class Database {
    connectionString = "mongodb+srv://lucasgiffuni:Pass12345@cluster0.7cpgmrl.mongodb.net/?retryWrites=true&w=majority";

    client = new MongoClient(this.connectionString);
    connection: any;


    constructor() {
        this.connect();
    }

    async connect() {
        let conn: any;
        try {
            conn = await this.client.connect();

        } catch (error) {
            console.error(`Error connecting to database: ${JSON.stringify(error)}`);
        }
        this.connection = conn.db("sample_training");

    }



    async createCard(card: CardInterface) {
        this.connect()
        const collection = await this.connection.collection("cards");
        const newDocument = card;
        const result = await collection.insertOne(newDocument);
        return result;
    }


    async getCard(cardId: string) {
        this.connect();
        const collection = await this.connection.collection("cards");
        let query = { id: new ObjectId(1) };
        let result = await collection.findOne(query);

        if (!result) {
            return "Not Found";
        } else {
            return result;

        }
    }


}




