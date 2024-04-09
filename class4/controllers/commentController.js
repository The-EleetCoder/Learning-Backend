const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.commentController = async (req, res) => {
  try {
    const { post, user, body } = req.body;
    const comment = await Comment.create({
        user,
        body,
        post
    });

    const updatedPost = await Post.findOneAndUpdate({_id: post},{$push: {comments: comment} },{new: true});

    res.send({
        data: updatedPost
    })

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
