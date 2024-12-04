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

module.exports = {
    createUser
};
