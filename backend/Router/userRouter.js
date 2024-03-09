
import express from "express";
import { createUser, getProfile, getusers, login, logout,  updteProfile } from "../Controller/userController.js";
import { authenticate } from "../middlewares/authMidlwere.js";


const userrouter = express.Router();




userrouter.post("/" , createUser)

userrouter.post("/login" , login)
userrouter.post("/logout" , logout)
userrouter.get("/all" , getusers)
userrouter.put("/update" ,   authenticate    ,updteProfile)
userrouter.get("/profile" ,   authenticate    ,getProfile)






export default userrouter