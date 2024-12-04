const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");

router.post("/", usersController.createUser);

router.put("/:userId", usersController.updateUser);

router.get("/", usersController.getAllUsers);

router.delete("/:id", usersController.deleteUser);

module.exports = router;