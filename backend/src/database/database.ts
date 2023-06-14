import { ListInterface } from "../../interfaces/listInterface";
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
        let query = { id: new ObjectId(cardId) };
        let result = await collection.findOne(query);

        if (!result) {
            return "Card Not Found";
        } else {
            return result;

        }
    }

    async updateCard(card: CardInterface) {
        const query = { _id: new ObjectId(card.id) };
        const updates = {
            $push: { 
                id: card.id,
                title: card.title,
                content: card.content,
                listId: card.listId
             }
        };

        let collection = await this.connection.collection("cards");
        let result = await collection.updateOne(query, updates);

        if (!result) {
            return "Card Not Found";
        } else {
            return result;

        }
    }

    async deleteCard(cardId: string) {
        this.connect();
        const query = { _id: new ObjectId(cardId) };

        const collection = this.connection.collection("posts");
        let result = await collection.deleteOne(query);

        if (!result) {
            return "Card Not Found";
        } else {
            return result;

        }
    }

    async createList(list: ListInterface) {
        this.connect()
        const collection = await this.connection.collection("lists");
        const newDocument = list;
        const result = await collection.insertOne(newDocument);
        return result;
    }

    async getList(listId: string, userId: string) {
        this.connect();
        const collection = await this.connection.collection("lists");
        const query = {
            id: new ObjectId(listId),
            userId: new ObjectId(userId)
        };
        let result = await collection.findOne(query);

        if (!result) {
            return "List Not Found";
        } else {
            return result;

        }
    }


    async deleteList(listId: string, userId: string) {
        this.connect();
        const query = {
            id: new ObjectId(listId),
            userId: new ObjectId(userId)
        };

        const collection = this.connection.collection("lists");
        let result = await collection.deleteOne(query);

        if (!result) {
            return "List Not Found";
        } else {
            return result;

        }
    }

    async updateList(list: ListInterface) {
        const query = { _id: new ObjectId(list.id) };
        const updates = {
            $push: { 
                id: list.id,
                name: list.name
                
             }
        };

        let collection = await this.connection.collection("lists");
        let result = await collection.updateOne(query, updates);

        if (!result) {
            return "Card Not Found";
        } else {
            return result;

        }
    }




}




