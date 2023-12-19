const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        maxLength: 50,
        required: true
    },
    description:{
        type: String,
        required: true,
        maxLength: 50
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        required: true,
        default:Date.now()
    }
});

module.exports = mongoose.model("Todo", todoSchema);