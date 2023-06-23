import express from "express";
import bodyParser from 'body-parser';
import Database from "./database/database";
const app = express();
const port = 3000;
const database = new Database();
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// create cards
app.post('/card/createCard/:userId/:listId', (req, res) => {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const cardId = req.body.cardId;
    const cardTitle = req.body.cardTitle;
    const cardContent = req.body.cardContent;
    const card = {
        id: cardId,
        title: cardTitle,
        content: cardContent,
        listId: listId
    };
    const result = database.createCard(card);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
// get card
app.get('/card/getCard/:listId/:cardId', (req, res) => {
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
app.delete('/card/deleteCard/:userId/:listId/:cardId', (req, res) => {
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
app.post('/list/createlist/:iduser', (req, res) => {
    const iduser = req.params.iduser;
    const idList = "1";
    const newlist = {
        id: 1,
        name: "new list",
        userId: iduser,
        cards: [{
                id: 1,
                title: "new card",
                content: "content to the card",
                listId: idList
            }]
    };
    const result = database.createList(newlist);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(500).json("Error");
    }
});
app.get('/list/getLists/:userId/:listId', (req, res) => {
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
app.delete('/list/deleteList/:iduser/:idlist', (req, res) => {
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
app.patch('/list/updateList/:iduser/:idlist', (req, res) => {
    const iduser = req.params.iduser;
    const idlist = req.params.idlist;
    const listNewName = req.query.listName;
    const newlist = {
        id: 1,
        name: listNewName,
        userId: iduser,
        cards: []
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