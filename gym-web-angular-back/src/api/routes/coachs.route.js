const express = require('express');
const coachsRouter = express.Router();

const {getCoachs,getOneCoach, postCoach, putCoach, deleteCoach} = require("../controllers/coachs.constroller")

coachsRouter.get("/",[isAuth], getCoachs);
coachsRouter.get("/:id",[isAuth], getOneCoach);
coachsRouter.post("/",[isCoach], postCoach)
coachsRouter.put("/:id",[isCoach], putCoach)
coachsRouter.delete("/:id",[isCoach], deleteCoach)

module.exports = coachsRouter;