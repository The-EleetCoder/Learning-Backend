const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const findObject = await Todo.findById(id);

    if (!findObject) {
      return res.status(400).json({
        success: false,
        data: "No such object exists",
        message: "Not Updated",
      });
    }
    const response = await Todo.findByIdAndUpdate(id, { title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
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
