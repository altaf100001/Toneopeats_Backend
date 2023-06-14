const {DishesModel} = require("../models/dishes.model")


exports.foodData =
    async(req,res)=>{

        try {
        
        
        
        const dishData =await DishesModel.find()
        
        if (dishData.length == 0) {
            throw new Error('no data found')
        }
        
        res.status(200).json({
            error:false,
            message:"fetch successfully..",
            data:dishData
        })
        
            
        } catch (error) {
            res.status(500).json({
                error:true,
                message:error.message,
                
            })
        }
        
        
        
        
        
        

}

