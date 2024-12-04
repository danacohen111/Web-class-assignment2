const UserModel = require("../models/users_model");

const createUser = async (req, res) => {
    const userBody = req.body;
    try {
      const user = await UserModel.create(postBody);
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { username, email, password } = req.body;

      if (!username && !email && !password) {
        return res.status(400).send("At least one of title or content is required");
      }
  
      const updateFields = {};
      if (username) updateFields.username = username;
      if (email) updateFields.email = email;
      if (password) updateFields.password = password;
  
      const user = await UserModel.findByIdAndUpdate(
        userId,
        { $set: updateFields },
        { new: true, runValidators: true }
      );
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
};

module.exports = {
    createUser,
    updateUser
};
