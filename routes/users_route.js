const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");

router.post("/", usersController.createUser);

router.put("/:userId", usersController.updateUser);

router.get("/", usersController.getAllUsers);

module.exports = router;