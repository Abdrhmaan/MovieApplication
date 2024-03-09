
import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMidlwere.js";
import { createGenra, dletedgenra, getallgera, getonegenra,updatedgenra } from "../Controller/geraController.js";

const genra = express.Router()



genra.post("/" ,authenticate , authorizeAdmin , createGenra)
genra.get("/" ,  getallgera)
genra.get("/:id" ,authenticate ,   getonegenra)
genra.delete("/:id" ,authenticate , authorizeAdmin    , dletedgenra)
genra.put("/:id" ,authenticate , authorizeAdmin  ,  updatedgenra)

export default genra 