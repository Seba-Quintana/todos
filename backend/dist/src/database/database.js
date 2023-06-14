"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Database {
    constructor() {
        this.connectionString = "mongodb+srv://lucasgiffuni:Pass12345@cluster0.7cpgmrl.mongodb.net/?retryWrites=true&w=majority";
        this.client = new mongodb_1.MongoClient(this.connectionString);
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
            let query = { id: new mongodb_1.ObjectId(1) };
            let result = yield collection.findOne(query);
            if (!result) {
                return "Not Found";
            }
            else {
                return result;
            }
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map