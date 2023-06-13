"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./database/database"));
const app = (0, express_1.default)();
const port = 3000;
const database = new database_1.default();
// Configuring body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// create cards
app.post('/card/createCard/:userId/:listId', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const cardTitle = req.body.cardTitle;
    const cardContent = req.body.cardContent;
    const card = {
        id: 0,
        title: cardTitle,
        content: cardContent
    };
    database.createCard(card);
});
// get cards
app.get('/card/getCard/:userId/:listId', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    res.send('got card successfully');
    // res.status(404).send('user not found');
});
// put cards
app.put('/card/changeCard/:userId/:listId/:cardId', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    res.send('card is changed');
    // res.status(404).send('user not found');
});
// delete cards
app.delete('/card/deleteCard/:userId/:listId/:cardId', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.cardId;
    res.send('card is deleted');
    // res.status(404).send('user not found');
});
// lista
app.post('/list/createlist/:iduser/:name', (req, res) => {
    const iduser = req.params.iduser;
    const name = req.params.name;
    const newlist = {
        id: 1,
        name: "new list",
        cards: [{
                id: 1,
                title: "new card",
                content: "content to the card",
            }]
    };
});
app.delete('/list/deleteList/:iduser/:idlist', (req, res) => {
    const iduser = req.params.iduser;
    const idlist = req.params.idlist;
    // this.list.remove(idlist)
});
app.patch('/list/updateList/:iduser/:idlist', (req, res) => {
    const iduser = req.params.iduser;
    const idlist = req.params.idlist;
    const listNewName = req.query.listName;
});
app.listen(port);
//# sourceMappingURL=index.js.map