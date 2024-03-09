
import mongoose from "mongoose"

const genraSchem = mongoose.Schema({

    name : {
        type: String,
        required: true,
        trim : true,
        maxLength : 32,
        unique : true
    }
})


export const Genra  = mongoose.model("Genra", genraSchem)



 // genra eans category waaaye 