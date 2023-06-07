import express, { Express } from "express";
import bodyParser from 'body-parser';
import {CardInterface} from "../interfaces/cardInterface";
import {ListInterface} from "../interfaces/listInterface";

const app = express();
const port = 3000;


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var lista : ListInterface[] = [

	{
		id:0,
		name: "lista 1",
		cards:[
		{
			id:0,
			title: "titulo",
			content: "sadfdsaf"
		}
		]

	}
]




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


	let cardList=  lista.filter(x => x.id == listId)[0];	
	cardList.cards.push(card)
	res.send('card is created');

});

// get cards
app.get('/card/getCard/:userId/:listId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;

	let cardList=  lista.filter(x => x.id == listId)[0];	

	res.send(cardList);
});

// put cards
app.put('/card/changeCard/:userId/:listId/:cardId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;
	const cardId: string = req.params.cardId;

	let cardList=  lista.filter(x => x.id == listId)[0];	

	let selectedCard = cardList.cards.filter(x => x.id == cardId)[0];
	cardList.cards.push(card)
	res.send('card is created');

	res.send('card is changed');
});

// delete cards
app.delete('/card/deleteCard/:userId/:listId/:cardId', (req, res) => {
	const userId: number = req.params.idUser;
	const listId: number = req.params.idList;


	res.send('card is deleted');
	// res.status(404).send('user not found');
});

//lista
app.post('/list/createlist/:iduser/:name', (req,res ) => {
    const iduser: number = req.params.iduser;
    const name:string = req.params.name;
    const newlist: ListInterface={
        id: number,
        name:string,
        cards: CardInterface[],
     }

	 lista.
	 


})

app.delete('/list/deleteList/:iduser/:idlist', (req,res) =>{

    const iduser: number = req.params.iduser;
    const idlist: number = req.params.idlist;
    //this.list.remove(idlist)
})

app.patch('/list/updateList/:iduser/:idlist' ,(req, res) =>{
    const iduser: number = req.params.iduser;
    const idlist: number = req.params.idlist;

    var listNewName : string = req.query.listName

    var selectedList : ListInterface = this.lists.find(idlist);

    selectedList.name = listNewName;

})



app.get('/user/getusers', (req,res)=>{
    const userList:userinterface = [];
    const res = userList;
})



app.listen(port);