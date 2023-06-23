import express, { Express } from "express";
import bodyParser from "body-parser";
import { CardInterface } from "../interfaces/cardInterface";
import { ListInterface } from "../interfaces/listInterface";
import { userInterface } from "../interfaces/userinterface";
import Database from "./database/database";
import cors from "cors";

const app = express();
const port = 3000;

const database = new Database();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

// create cards
app.post("/card/createCard/:userId/:listId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.listId;

  const cardId = req.body.cardId;
  const cardTitle = req.body.cardTitle;
  const cardContent = req.body.cardContent;

  const card: CardInterface = {
    id: cardId,
    title: cardTitle,
    content: cardContent,
    listId: listId,
  };

  const result = database.createCard(card);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

// get card
app.get("/card/getCard/:listId/:cardId", (req, res) => {
  const cardId: string = req.params.cardId;

  const result = database.getCard(cardId);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

// delete cards
app.post("/card/deleteCard/:cardId", (req, res) => {
  const cardId: string = req.params.cardId;

  const result = database.deleteCard(cardId);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

// lista
app.post("/card/putCard/:cardId", (req, res) => {
  const idCard = req.params.cardId;
  const idList = "1";
  const newCard: CardInterface = {
    id: 1,
    title: "Card" + idCard,
	content: "lorem ipsum",
	listId: "0"
    
  };

  const result = database.createCard(newCard);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

app.get("/list/getLists/:userId/:listId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.listId;

  const result = database.getList(listId, userId);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

app.get("/card/getCards", (req, res) => {

  const result = database.getCards("1").then((response) =>{
	if (response) {
		console.log(response)
		res.status(200).json(response);
	  } else {
		res.status(500).json("Error");
	  }
  });
  
 
});

app.delete("/list/deleteList/:iduser/:idlist", (req, res) => {
  const iduser: string = req.params.iduser;
  const idlist: string = req.params.idlist;

  const result = database.deleteList(idlist, iduser);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

app.patch("/list/updateList/:iduser/:idlist", (req, res) => {
  const iduser: string = req.params.iduser;
  const idlist: string = req.params.idlist;

  const listNewName = req.query.listName as string;
  const newlist: ListInterface = {
    id: 1,
    name: listNewName,
    userId: iduser,
    cards: [],
  };
  const result = database.updateList(newlist);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error");
  }
});

app.listen(port);
