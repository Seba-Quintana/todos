import express, { Express } from "express";
import bodyParser from 'body-parser';
import { CardInterface } from "../interfaces/cardInterface";
import { ListInterface } from "../interfaces/listInterface";
import { userInterface } from "../interfaces/userinterface";
import Database from "./database/database";

const app = express();
const port = 3000;

const database = new Database();


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create cards
app.post('/card/createCard/:userId/:listId', (req, res) => {
	const userId: string = req.params.userId;
	const listId: string = req.params.listId;

	const cardId = req.body.cardId;
	const cardTitle = req.body.cardTitle;
	const cardContent = req.body.cardContent;

	const card: CardInterface = {
		id: cardId,
		title: cardTitle,
		content: cardContent
	};
	
	const result = database.createCard(card);
	if(result){
        res.status(200).json(result);
	}


});

// get card
app.get('/card/getCard/:cardId', (req, res) => {
	const cardId: string = req.params.cardId;

	const result = database.getCard(cardId);
	if(result){
        res.status(200).json(result);
	}
	res.send('got card successfully');
	// res.status(404).send('user not found');
});

// put cards
app.put('/card/changeCard/:userId/:listId/:cardId', (req, res) => {
	const userId: string = req.params.userId;
	const listId: string = req.params.listId;


	res.send('card is changed');
	// res.status(404).send('user not found');
});

// delete cards
app.delete('/card/deleteCard/:userId/:listId/:cardId', (req, res) => {
	const userId: string = req.params.userId;
	const listId: string = req.params.cardId;


	res.send('card is deleted');
	// res.status(404).send('user not found');
});

// lista
app.post('/list/createlist/:iduser/:name', (req, res) => {
	const iduser: string = req.params.iduser;
	const name: string = req.params.name;
	const newlist: ListInterface = {
		id: 1,
		name: "new list",
		cards: [{
			id: 1,
			title: "new card",
			content: "content to the card",
		}]
	}


})

app.delete('/list/deleteList/:iduser/:idlist', (req, res) => {

	const iduser: string = req.params.iduser;
	const idlist: string = req.params.idlist;
	// this.list.remove(idlist)
})

app.patch('/list/updateList/:iduser/:idlist', (req, res) => {
	const iduser: string = req.params.iduser;
	const idlist: string = req.params.idlist;

	const listNewName = req.query.listName;



})


app.listen(port);