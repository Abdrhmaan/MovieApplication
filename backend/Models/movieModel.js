

import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema;


const revieSchem = {

    name : {
        type: String,
        required: true,
      
    },

    rating : {
        type: Number,
        required: true,
  
    },

    comment : {

        type: String,
        required: true,
    },

    user : { 

        type: ObjectId,  ref : "User" ,required : true
    }


}



const movieschme = mongoose.Schema({


  name: {
    type: String,
    required: true

  },

  review : [revieSchem],

  image: {
    type: String,
    required: true
  },

  year: {
    type: Number,
    required: true
  },

  genre : { type: ObjectId, ref: "Genre", required: true },

cast  : [{ type: String}],

detail : {type : String , required : true},

Numperviews : {type : Number, required : true , default : 0},

createdAt : {type : Date, default : Date.now()}

} ,{timestamps : true})




export  const Movies = mongoose.model("Movie", movieschme)