
import express from "express";
import dotenv from "dotenv"
import path from "path"

import db from "./Config/db.js";
import cookieParser from "cookie-parser";
import userrouter from "./Router/userRouter.js";
import cors from "cors"
import genra from "./Router/genraRouter.js";
import movirouter from "./Router/moviRouter.js";
import uploadrouter from "./Router/uploadrouter.js";





const app = express();

dotenv.config({});


 // connextion dtabase 
db()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
  
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extends: true}))





// Routes


app.use("/api/v1/users",  userrouter)
app.use("/api/v1/genra",  genra)
app.use("/api/v1/movie",  movirouter)
app.use("/api/v1/upload",  uploadrouter)




const __dirname =  path.resolve()


app.use("/uploads", express.static(path.join(__dirname + "/uploads")));


app.listen(8000 , (e) => {
    console.log("Server is running on port 800");
})



