const express = require("express");

const router = express.Router();

const registerUser = "./userController";
router.route("/api/v1/register").post(registerUser);
