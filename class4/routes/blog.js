const express = require("express");
const router = express.Router();

// import controller
const {
  postController,
  getPostController,
} = require("../controllers/postController");

const { commentController } = require('../controllers/commentController');
const { likeController, unlikeController } = require('../controllers/likeController');

// create mapping
router.post("/posts/create", postController);
router.get("/posts", getPostController);
router.post("/comments/create", commentController);
router.post("/likes/like", likeController);
router.post("/likes/unlike", unlikeController);

// export
module.exports = router;
