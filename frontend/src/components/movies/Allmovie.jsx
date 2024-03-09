

import React from 'react'



import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetallmoviesQuery, useNewMoviesQuery, useRandommoviesQuery, useTopMoviesQuery } from '../../redux/api/MovirapiSlice';
import { useFecthGenraQuery } from '../../redux/api/genraApi';
import { setFilterMovies, setMovieYears, setMoviesFilter, setUniqueYears } from '../../redux/feautare/auth/movieSlcie';
import banner from "../../assets/banner.jpg";
import MovieCard from './MovieCard';

const Allmovie = () => {


  const dispatch = useDispatch();

  const { data } = useGetallmoviesQuery();
  const { data: genres } = useFecthGenraQuery();
  const { data: newMovies } = useNewMoviesQuery();
  const { data: topMovies } = useTopMoviesQuery();
  const { data: randomMovies } = useRandommoviesQuery();

  const {moviesFilter , filterMovies
  }  = useSelector((state) => state.movies)
  console.log(moviesFilter)



   // unique yaear

   const movieYears = data?.map((movie) => movie.year)
  

   const uniqueYears = Array.from (new Set(movieYears))
 

   useEffect(() => {
     dispatch(setFilterMovies(data || []))
     dispatch(setMovieYears(movieYears))
     dispatch(setUniqueYears(uniqueYears))
   },[data , dispatch])



    // seach item waaaye 

   const handleSearchChange = (e) => {

    dispatch(setMoviesFilter({searchTem : e.target.value}))



   const filtermovie = data.filter((movie) => movie.name.toLowerCase().includes(e.target.value.toLowerCase()))


    dispatch(setFilterMovies(filtermovie))

   }



   const  handleGenreClick = (genraid) => {



      const filterbygenra    = data.filter(movie => movie.genre == genraid)

      dispatch(setFilterMovies(filterbygenra))
       

   }


   const handleYearChange = (year) => {

    const filteryear =  data.filter(movie =>   movie.year ==  + year)



    dispatch(setFilterMovies(filteryear))

   }




   const handleSortChange = (sortoption)=> {


    switch (sortoption) {
      case "new":

      
      dispatch(setFilterMovies(newMovies))

        
        break;

        case "top":

      
        dispatch(setFilterMovies(topMovies))
  
          
          break;

          case "random":

      
          dispatch(setFilterMovies(randomMovies))
    
            
            break;
  

       


    
      default: 
      dispatch(setFilterMovies([]))
        break;
    }



   }


  


 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -translate-y-[5rem]">

     <section>
     <div
            className="relative h-[50rem] w-screen mb-10 flex items-center justify-center bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >

<div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-60"></div>

<div className="relative z-10 text-center text-white mt-[10rem]">
              <h1 className="text-8xl font-bold mb-4">The Movies Hub</h1>
              <p className="text-2xl">
                Cinematic Odyssey: Unveiling the Magic of Movies
              </p>
            </div>




            <section className='absolute -bottom-[5rem]'> 

         <input type="text"
                className="w-[100%] h-[5rem] border px-10 outline-none rounded"
                placeholder="Search Movie"
                value={moviesFilter.searchTerm}
                onChange={handleSearchChange}
              />



      <section  className="sorts-container mt-[2rem] ml-[10rem]  w-[30rem]">
 

<select
                  className="border p-2 rounded text-black"
                  value={moviesFilter.selectedGenre}
              onChange={(e) => handleGenreClick(e.target.value)}
                >
                  <option value="">Genres</option>
                  {genres?.map((genre) => (
                    <option key={genre._id} value={genre._id}>
                      {genre.name}
                    </option>
                  ))}
                </select>


                <select
                  className="border p-2 rounded ml-4 text-black"
                  value={moviesFilter.selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                >
                  <option value="">Year</option>
                  {uniqueYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  className="border p-2 rounded ml-4 text-black"
                  value={moviesFilter.selectedSort}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option value="">Sort By</option>
                  <option value="new">New Movies</option>
                  <option value="top">Top Movies</option>
                  <option value="random">Random Movies</option>
                </select>
         

</section>






            </section>



      </div>



      <section className="mt-[10rem] w-screen flex justify-center items-center flex-wrap">
            {filterMovies?.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </section>
     


     </section>


    </div>
  )
}

export default Allmovie