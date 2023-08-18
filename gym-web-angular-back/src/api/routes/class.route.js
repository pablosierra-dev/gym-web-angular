
const express = require('express');
const classRouter = express.Router();

const {getClass, getOneClass, getOneClassByName, getOneClassByType,putClass,postClass ,deleteClass} = require("../controllers/class.controller")

classRouter.get("/", getClass);
classRouter.get("/:id", getOneClass)
classRouter.get("/findByName/:name", getOneClassByName)
classRouter.get("/findByType/:Type", getOneClassByType)
classRouter.put("/modifyClass/:id", putClass)
classRouter.post("/newClass/", postClass)
classRouter.delete("/deleted/:id", deleteClass)

module.exports = classRouter;