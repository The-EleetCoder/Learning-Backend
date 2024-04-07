const express = require('express');
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodos} = require("../controllers/getTodos");

//define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);

module.exports = router;