import mongoose from "mongoose"

const db =   async() => {



     try {

        await mongoose.connect("mongodb+srv://xaan08712:hoooyoxaawo@cluster0.iniohjg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        
       .then((e) => console.log("connected"))
      .catch((e) => console.log(e))

   

     }  catch(e )  {
        console.log(e)




     }


}



export default  db