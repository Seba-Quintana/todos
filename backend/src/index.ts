import express, { Express } from "express";
import bodyParser from 'body-parser';
import {CardInterface} from "../interfaces/cardInterface";

const app = express();
const port = 3000;


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create cards
app.post('/card/createCard/:userId/:listId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;

	const cardTitle = "card";
	const cardContent = "lorem ipsum";

	const card: CardInterface = {
		id: 0,
		title: cardTitle,
		content: cardContent
	};

	res.send('card is created');
	// res.status(404).send('user not found');
});

// get cards
app.get('/card/getCard/:userId/:listId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;


	res.send('got card successfully');
	// res.status(404).send('user not found');
});

// put cards
app.put('/card/changeCard/:userId/:listId/:cardId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;


	res.send('card is changed');
	// res.status(404).send('user not found');
});

// delete cards
app.delete('/card/deleteCard/:userId/:listId/:cardId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;


	res.send('card is deleted');
	// res.status(404).send('user not found');
});

app.listen(port);