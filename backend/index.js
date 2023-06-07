
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

//lista
app.post('/list/createlist/:iduser/:name', (req,res ) => {
    iduser: number = req.params.iduser;
    name:string = req.params.name;
     newlist: ListInterface={
        id: number,
        name:string,
        cards:Array,
     }


})

app.delete('/list/deleteList/:iduser/:idlist', (req,res) =>{

    iduser: number = req.params.iduser;
    idlist: number = req.params.idlist;
    //this.list.remove(idlist)
})

app.patch('/list/updateList/:iduser/:idlist' ,(req, res) =>{
    iduser: number = req.params.iduser;
    idlist: number = req.params.idlist;

    listNewName : string = req.query.listName

    selectedList : ListInterface = this.lists.find(idlist);

    selectedList.name = listNewName;

})



app.get('/user/getusers', (req,res)=>{
    userList:userinterface = [];
    res = userList;
})

