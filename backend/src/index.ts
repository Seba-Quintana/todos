import express, { Express } from "express";
import bodyParser from 'body-parser';
import { CardInterface } from "../interfaces/cardInterface";
import { ListInterface } from "../interfaces/listInterface";
import { userInterface } from "../interfaces/userinterface";

const app = express();
const port = 3000;


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create cards
app.post('/card/createCard/:userId/:listId', (req, res) => {
	const userId: string = req.params.userId;
	const listId: string = req.params.listId;

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
	const userId: string = req.params.userId;
	const listId: string = req.params.listId;


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

//lista
app.post('/list/createlist/:iduser/:name', (req, res) => {
	const iduser: string = req.params.iduser;
	const name: string = req.params.name;
	const newlist: ListInterface = {
		id: number = 0,
		name: string = "",
		cards: Array<CardInterface[]>,
	}


})

app.delete('/list/deleteList/:iduser/:idlist', (req, res) => {

	const iduser: string = req.params.iduser;
	const idlist: string = req.params.idlist;
	//this.list.remove(idlist)
})

app.patch('/list/updateList/:iduser/:idlist', (req, res) => {
	const iduser: string = req.params.iduser;
	const idlist: string = req.params.idlist;

	var listNewName: string = req.query.listName

	var selectedList: ListInterface = this.lists.find(idlist);

	selectedList.name = listNewName;

})



app.get('/user/getusers', (req, res) => {
	const userList: userinterface = [];
	const res = userList;
})



app.listen(port);