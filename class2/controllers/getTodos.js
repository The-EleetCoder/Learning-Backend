const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Fetched Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findById(id);
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Fetched Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
