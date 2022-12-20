const express = require('express');
const ProfileController = require("../controllers/ProfileController")
const LoginController = require("../controllers/LoginController")
const ToDoListController=require("../controllers/ToDOListController");
const AuthVerifyMiddleWare = require('../middleware/AuthVerifyMiddleWare');
const router =express.Router();

router.post("/CreateProfile", ProfileController.CreateProfile);
router.post("/UserLogin", LoginController.UserLogin);

router.get("/SelectProfile", AuthVerifyMiddleWare, ProfileController.SelectProfile);
router.post("/UpdateProfile", AuthVerifyMiddleWare, ProfileController.UpdateProfile);

router.post("/CreateToDo", AuthVerifyMiddleWare, ToDoListController.CreateToDo);
router.get("/SelectToDo", AuthVerifyMiddleWare, ToDoListController.SelectToDo);
router.post("/UpdateToDo",AuthVerifyMiddleWare,ToDoListController.UpdateToDo);
router.post("/UpdateStatusToDo", AuthVerifyMiddleWare, ToDoListController.UpdateStatusToDo);
router.post("/RemoveToDo", AuthVerifyMiddleWare, ToDoListController.RemoveToDo);
router.post("/SelectToDoByStatus", AuthVerifyMiddleWare, ToDoListController.SelectToDoByStatus);
router.post("/SelectToDoByDate",AuthVerifyMiddleWare,ToDoListController.SelectToDoByDate);














module.exports=router