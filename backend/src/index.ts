import express, { Express } from "express";
import bodyParser from "body-parser";
import { CardInterface } from "../interfaces/cardInterface";
import { ListInterface } from "../interfaces/listInterface";
import { userInterface } from "../interfaces/userinterface";

const app = express();
const port = 3000;

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var lista: ListInterface[] = [
  {
    id: 0,
    name: "lista 1",
    cards: [
      {
        id: 0,
        title: "titulo",
        content: "sadfdsaf",
      },
    ],
  },
];

// create cards
app.post("/card/createCard/:userId/:listId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.listId;

  const cardTitle = "card";
  const cardContent = "lorem ipsum";

  const card: CardInterface = {
    id: 0,
    title: cardTitle,
    content: cardContent,
  };

  let cardList = lista.filter((x) => x.id == parseInt(listId))[0];
  cardList.cards.push(card);
  res.send("card is created");

  // res.status(404).send('user not found');
});

// get cards
app.get("/card/getCard/:userId/:listId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.listId;

  let cardList = lista.filter((x) => x.id == parseInt(listId))[0];

  res.send(cardList);
});

// put cards
app.put("/card/changeCard/:userId/:listId/:cardId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.listId;
  const cardId: string = req.params.cardId;

  const title: string = req.query.cardTitle;
  const content: string = req.query.cardContent;

  let cardList = lista.filter((x) => x.id == parseInt(listId))[0];
  let selectedCard = cardList.cards.filter((x) => x.id == parseInt(cardId))[0];

  if (selectedCard != null) {
    selectedCard.content = content;
    selectedCard.title = title;

    res.status(200).send("card Changed");
  } else {
    res.status(404).send("card not found");
  }
});

// delete cards
app.delete("/card/deleteCard/:userId/:listId/:cardId", (req, res) => {
  const userId: string = req.params.userId;
  const listId: string = req.params.cardId;
  const cardId: string = req.params.cardId;

  let cardList = lista.filter((x) => x.id == parseInt(listId))[0];
  let selectedCard = cardList.cards.filter((x) => x.id == parseInt(cardId))[0];

  if (selectedCard != null) {
    const index = cardList.cards.indexOf(selectedCard, 0);

    if (index > -1) {
      cardList.cards.splice(index, 1);
    }
    res.status(200).send("card removed");
  } else {
    res.status(404).send("card not found");
  }
});

//lista
app.post("/list/createlist/:iduser/:name", (req, res) => {
  const iduser: string = req.params.iduser;
  const name: string = req.params.name;
  const newlist: ListInterface = {
    id: (number = 0),
    name: (string = ""),
    cards: Array<CardInterface[]>,
  };
});

app.delete("/list/deleteList/:iduser/:idlist", (req, res) => {
  const iduser: string = req.params.iduser;
  const idlist: string = req.params.idlist;
  //this.list.remove(idlist)
});

app.patch("/list/updateList/:iduser/:idlist", (req, res) => {
  const iduser: string = req.params.iduser;
  const idlist: string = req.params.idlist;

  var listNewName: string = req.query.listName;

  var selectedList: ListInterface = this.lists.find(idlist);

  selectedList.name = listNewName;
});

app.get("/user/getusers", (req, res) => {
  const userList: userinterface = [];
  const res = userList;
});

app.listen(port);
