
const express = require('express');
const classRouter = express.Router();

const {getClass, getOneClass, getOneClassByName, getOneClassByType,putClass,postClass ,deleteClass} = require("../controllers/class.controller")

classRouter.get("/",[isAuth], getClass);
classRouter.get("/:id",[isAuth], getOneClass)
classRouter.get("/findByName/:name",[isAuth], getOneClassByName)
classRouter.get("/findByType/:Type",[isAuth], getOneClassByType)
classRouter.put("/modifyClass/:id", putClass)
classRouter.post("/newClass/", postClass)
classRouter.delete("/deleted/:id", deleteClass)

module.exports = classRouter;