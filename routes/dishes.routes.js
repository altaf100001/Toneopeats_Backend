const {Router} = require("express")
const { Error } = require("mongoose")
const dishesController = Router()

const {DishesModel} = require("../models/dishes.model")
const {foodData,juicedata}  =require('../controller/dishes')


dishesController.get('/dishes',foodData)

dishesController.get('/scroll',juicedata
)





module.exports ={
    dishesController
}