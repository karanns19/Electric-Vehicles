const mongoose = require("mongoose")
const schema = mongoose.Schema

const users = new schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    modelName:{
        type:Array,
        required:true
    },
    modelColor:{
        type:Array,
        required:true
    },
    ownerName:{
        type:Array,
        required:true
    },
    address:{
        type:Array,
        required:true
    },
    orderDate:{
        type:Array,
        required:true
    }
})

const model = mongoose.model("model",users)
module.exports = model
