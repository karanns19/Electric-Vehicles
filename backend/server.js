const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const model = require("./models/models")


const app = express();
app.use(express.json()); 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ev",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=> console.log("Database connected"))

app.post("/users/new", async(req, res) =>{
    const user = new model({
        email: req.body.email,
        password: req.body.password,
        modelName: [],
        modelColor: [],
        ownerName: [],
        address: [],
    });
    user.save(); 
    res.json(user)
})

app.get("/users", async(req, res)=>{
    const users = await model.find()
    res.json(users)
})

app.put('/users/update/:id', async (req, res) => {
    const response = await model.findById(req.params.id);
    response.modelName.push(req.body.modelName)
    response.modelColor.push(req.body.modelColor)
    response.ownerName.push(req.body.ownerName)
    response.address.push(req.body.address)
    response.orderDate.push(new Date())
    response.save();
    res.json(response);
})

app.get('/users/:id', async (req, res) => {
    const response = await model.findById(req.params.id);
    res.json(response);
})

app.listen(3001,()=> console.log("Server started"));


