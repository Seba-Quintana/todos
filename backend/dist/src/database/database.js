var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectId, MongoClient } from "mongodb";
export default class Database {
    constructor() {
        this.connectionString = "mongodb+srv://lucasgiffuni:Pass12345@cluster0.7cpgmrl.mongodb.net/?retryWrites=true&w=majority";
        this.client = new MongoClient(this.connectionString);
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            let conn;
            try {
                conn = yield this.client.connect();
            }
            catch (error) {
                console.error(`Error connecting to database: ${JSON.stringify(error)}`);
            }
            this.connection = conn.db("sample_training");
        });
    }
    createCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const collection = yield this.connection.collection("cards");
            const newDocument = card;
            const result = yield collection.insertOne(newDocument);
            return result;
        });
    }
    getCard(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const collection = yield this.connection.collection("cards");
            let query = { id: new ObjectId(cardId) };
            let result = yield collection.findOne(query);
            if (!result) {
                return "Card Not Found";
            }
            else {
                return result;
            }
        });
    }
    updateCard(card) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { _id: new ObjectId(card.id) };
            const updates = {
                $push: {
                    id: card.id,
                    title: card.title,
                    content: card.content,
                    listId: card.listId
                }
            };
            let collection = yield this.connection.collection("cards");
            let result = yield collection.updateOne(query, updates);
            if (!result) {
                return "Card Not Found";
            }
            else {
                return result;
            }
        });
    }
    deleteCard(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const query = { _id: new ObjectId(cardId) };
            const collection = this.connection.collection("posts");
            let result = yield collection.deleteOne(query);
            if (!result) {
                return "Card Not Found";
            }
            else {
                return result;
            }
        });
    }
    createList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const collection = yield this.connection.collection("lists");
            const newDocument = list;
            const result = yield collection.insertOne(newDocument);
            return result;
        });
    }
    getList(listId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const collection = yield this.connection.collection("lists");
            const query = {
                id: new ObjectId(listId),
                userId: new ObjectId(userId)
            };
            let result = yield collection.findOne(query);
            if (!result) {
                return "List Not Found";
            }
            else {
                return result;
            }
        });
    }
    deleteList(listId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connect();
            const query = {
                id: new ObjectId(listId),
                userId: new ObjectId(userId)
            };
            const collection = this.connection.collection("lists");
            let result = yield collection.deleteOne(query);
            if (!result) {
                return "List Not Found";
            }
            else {
                return result;
            }
        });
    }
    updateList(list) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { _id: new ObjectId(list.id) };
            const updates = {
                $push: {
                    id: list.id,
                    name: list.name
                }
            };
            let collection = yield this.connection.collection("lists");
            let result = yield collection.updateOne(query, updates);
            if (!result) {
                return "Card Not Found";
            }
            else {
                return result;
            }
        });
    }
}
//# sourceMappingURL=database.js.map