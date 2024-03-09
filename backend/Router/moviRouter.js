

import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMidlwere.js";
import { addtoreview, createMovies, dleleteCommente, dlledtmovies, getallmovies, getbyidmovies, newmvovies, randommovies, topmovies, updatemovies } from "../Controller/movieController.js";

const movirouter = express.Router()





movirouter.post("/creatmovies" , authenticate , authorizeAdmin , createMovies)


movirouter.get("/allmovies" ,  getallmovies)
movirouter.get("/one/:id" ,  getbyidmovies)

movirouter.delete("/dlelet/:id" ,authenticate , authorizeAdmin ,  dlledtmovies)

movirouter.put("/update/:id" ,authenticate , authorizeAdmin ,  updatemovies)

movirouter.post("/add/:id" ,authenticate ,   addtoreview)


movirouter.delete("/dleted-commnete" ,authenticate ,   authorizeAdmin , dleleteCommente)




movirouter.get("/newMovies" ,   newmvovies)
movirouter.get("/top" ,   topmovies)
movirouter.get("/randommovies" ,   randommovies)





export default movirouter