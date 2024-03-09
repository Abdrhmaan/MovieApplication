import { Movies } from "../Models/movieModel.js"


export const createMovies  = async(req  ,res) => {

     try {


        const newMovie =  await new Movies(req.body)

        const savemovies = await newMovie.save()
        res.json(savemovies)


     }
     catch(e){
        console.log(e)
     }

   
  
}



export const getallmovies = async(req,res) => {


   const movies = await Movies.find({})

   res.json(movies)


      
}


export const getbyidmovies  = async(req,res) => {

   try {



       const movie = await Movies.findById(req.params.id)

       if(!movie){

          return res.status(401).send("Movie not found")
       }

       res.status(200).json(movie)

   } catch(e){
      console.log(e)
   }








}


export const dlledtmovies = async (req,res) => {

    try {

      const movie = await Movies.findByIdAndDelete(req.params.id)

       if(!movie){
          return res.status(401).send("Movie not found")

       }

       res.status(200).json("delted Succeguly")

    } catch(e){

      console.log(e)
    }





}


export const updatemovies = async(req,res) => {


   try {


      const {id} =  req.params

      const updtedmovies = await Movies.findByIdAndUpdate(id , req.body , {new : true})


      if(!updtedmovies){
       return   res.status(200).json({mssge : "Movie nat fond"})



      }


      res.json(updtedmovies)







   } catch(e){

      console.log(e)
   }



}



export const addtoreview = async (req, res) => {
   const { rating, comment } = req.body;
 
   try {
     const movie = await Movies.findById(req.params.id);
 
     if (!movie) {
       return res.status(404).json({ message: "Movie not found" });
     }
 
     const alreadyViewed = movie.review.find(
       (r) => r.user.toString() === req.user._id.toString()
     );
 
     if (alreadyViewed) {
       return res.status(200).json({ message: "You have already viewed this movie" });
     }
 
     const review = {
      name : req.user.username,
       user: req.user._id,
       rating: rating,
       comment: comment,
     };
 
     movie.review.push(review);
     movie.NumReviews = movie.review.length;
     
     const totalRating = movie.review.reduce((acc, item) => item.rating + acc, 0);
     movie.rating = totalRating / movie.review.length;
 
     await movie.save();
     res.status(200).json({ message: "Review added successfully" });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: "Internal Server Error" });
   }
 };
 


 export const dleleteCommente = async(req,res) => {


   try {
      const { movieId, reviewId } = req.body;
    const movie = await Movies.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const reviewIndex = movie.review.findIndex(
      (r) => r._id.toString() === reviewId
    );

    if (reviewIndex === -1) {
      return res.status(404).json({ message: "Comment not found" });
    }

    movie.review.splice(reviewIndex, 1);
    movie.numReviews = movie.review.length;
    movie.rating =
      movie.review.length > 0
        ? movie.review.reduce((acc, item) => item.rating + acc, 0) /
          movie.reviews.length
        : 0;

    await movie.save();
    res.json({ message: "Comment Deleted Successfully" });

   

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }

}






 export const newmvovies = async(req,res) => {

    try {

        
  const newmovies = await Movies.find().sort({createadAt: -1})


     res.json(newmovies)
        
    }   catch(e){
      console.log(e)
    }




 }



 export const topmovies =async (req,res) => {


   
   try {

        
      const topmovies = await Movies.find().sort({Numperviews: -1}).limit(10)
    
    
         res.json(topmovies)
            
        }   catch(e){
          console.log(e)
        }
    
    
    



 }


 export const randommovies  =  async(req ,res)  => {


      try {

         



         const randomMovies = await Movies.aggregate([{ $sample: { size: 10 } }]);

          res.json(randomMovies)


      } catch(e){

          console.log(e)
      }
 } 

 