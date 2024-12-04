const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: String,
    senderID: {
      type: String,
      required: true,
    }
  });
  
  const postModel = mongoose.model("Posts", postSchema);
  
  module.exports = postModel;