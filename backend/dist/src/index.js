"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./database/database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 3000;
const database = new database_1.default();
const RSA_PRIVATE_KEY = fs_1.default.readFileSync("src/private.key");
// Configuring body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// create cards
app.post("/card/createCard/:userId/:listId", (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const cardId = req.body.cardId;
    const cardTitle = req.body.cardTitle;
    const cardContent = req.body.cardContent;
    const card = {
        id: cardId,
        title: cardTitle,
        content: cardContent,
        listId: listId,
    };
    const result = database.createCard(card);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.post("/api/login", (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    if (email && password) {
        const userId = "1";
        const jwtBearerToken = jsonwebtoken_1.default.sign({}, RSA_PRIVATE_KEY, {
            algorithm: "RS256",
            expiresIn: 120,
            subject: userId,
        });
        // send the JWT back to the user
        // TODO - multiple options available
        res.cookie("SESSIONID", jwtBearerToken, { httpOnly: false, secure: false });
        res.sendStatus(200);
    }
    else {
        // send status 401 Unauthorized
        res.sendStatus(401);
    }
});
// get card
app.get("/card/getCard/:listId/:cardId", (req, res) => {
    const cardId = req.params.cardId;
    const listId = req.params.listId;
    const result = database.getCard(cardId);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
// delete cards
app.delete("/card/deleteCard/:userId/:listId/:cardId", (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const cardId = req.params.cardId;
    const result = database.deleteCard(cardId);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
// lista
app.post("/list/createlist/:iduser/:idlist", (req, res) => {
    const iduser = req.params.iduser;
    const idList = req.params.idlist;
    const newlist = {
        id: 1,
        name: "new list",
        userId: iduser,
        cards: [
            {
                id: 1,
                title: "new card",
                content: "content to the card",
                listId: idList,
            },
        ],
    };
    const result = database.createList(newlist);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.get("/list/getLists/:userId/:listId", (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const result = database.getList(listId, userId);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.delete("/list/deleteList/:iduser/:idlist", (req, res) => {
    const iduser = req.params.iduser;
    const idlist = req.params.idlist;
    const result = database.deleteList(idlist, iduser);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.patch("/list/updateList/:iduser/:idlist", (req, res) => {
    const iduser = req.params.iduser;
    const idlist = req.params.idlist;
    const listNewName = req.query.listName;
    const newlist = {
        id: 1,
        name: listNewName,
        userId: iduser,
        cards: [],
    };
    const result = database.updateList(newlist);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.listen(port);
//# sourceMappingURL=index.js.map