const Post = require("../models/postModel");

exports.postController = async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = new Post({ title, body });
    const savedPost = await newPost.save();

    res.send({
      data: savedPost,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

exports.getPostController = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({
        data: posts
    })
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
