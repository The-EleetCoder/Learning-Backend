const Todo = require ("../models/Todo");

exports.getTodos = async(req, res) => {
    try{
        //create a new Todo object and insert in DB
        const response = await Todo.find({});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry Fetched Successfully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message: err.message
        })
    }
} 