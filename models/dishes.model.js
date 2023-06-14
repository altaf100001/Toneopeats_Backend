const mongoose = require("mongoose")

const dishesSchema = new mongoose.Schema({

    img: {type:String,required:true},
    name: {type:String,required:true},
    price: {type:String,required:true},
    type: {type:String,required:true},
    kal: {type:String,required:true},
   


})

const DishesModel = mongoose.model("dish",dishesSchema)


module.exports ={
    DishesModel
}