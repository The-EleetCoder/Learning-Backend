const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likeController = async (req, res) => {
  try {
    const { post, user } = req.body;

    const like = await Like.create({
      post,
      user,
    });

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: post },
      { $push: { likes: like } },
      { new: true }
    );

    res.send({
      data: updatedPost,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

exports.unlikeController = async (req, res) => {
  try {
    const { post, like } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: like } },
      { new: true }
    );
    const unlike = await Like.deleteOne({ _id: like });

    res.send({
      data: updatedPost,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
