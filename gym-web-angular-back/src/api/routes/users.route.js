const express = require('express');
const usersRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")
const {getUsers,register,login, userProfile, checkSession ,getOneUser,postUser,putUser} = require("../controllers/users.constroller")

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getOneUser);
usersRouter.post("/newuser", postUser);
usersRouter.put("/modifyuser", putUser);
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post('/profile', [isAuth], userProfile);
usersRouter.get("/checksession", checkSession);



module.exports = usersRouter;