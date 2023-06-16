const {Router} = require("express")
const { Error } = require("mongoose")
const dishesController = Router()

const {DishesModel} = require("../models/dishes.model")
const {foodData,juicedata}  =require('../controller/dishes')


dishesController.post('/dishes',foodData)







module.exports ={
    dishesController
}