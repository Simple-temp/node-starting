const express = require ("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(cors())
app.use(bodyParser.json())

const users = [
            {
                name:"person-1",
                price:100,
                id:1,
                set:"banana"
            },
            {
                name:"person-2",
                price:100,
                id:2,
                set:"banana"
            },
            {
                name:"person-3",
                price:100,
                id:3,
                set:"banana"
            },
            {
                name:"person-4",
                price:100,
                id:4,
                set:"banana"
            },
        ]

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/fruits/mango",(req,res)=>{
    res.send({fruit:"mango",price:100,set:1,id:"banana"});
});

app.get("/user",(req,res)=>{
    res.send(users);
});

app.get("/user/:id",(req,res)=>{
    const userId = req.params.id;
    const user = users[userId];
    res.send(user);
});

app.post("/addUser",(req,res)=>{
    const user = req.body;
    user.id=22;
    res.send(user);
});

app.listen(4000,()=>console.log("succesfully called"));