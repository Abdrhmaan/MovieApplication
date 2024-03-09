import React from 'react'
import { useState } from 'react'
import { useNewMoviesQuery, useRandommoviesQuery, useTopMoviesQuery } from '../../redux/api/MovirapiSlice';
import { useFecthGenraQuery } from '../../redux/api/genraApi';
import Sidebarutil from '../Sidebarutil';

const MoviContainer = () => {



    const { data } = useNewMoviesQuery();
    const { data: topMovies } = useTopMoviesQuery();
    const { data: genres } = useFecthGenraQuery();
    const { data: randomMovies } = useRandommoviesQuery();

    const [selectedGenre, setSelectedGenre] = useState(null);
    console.log(data , "genra")


    const handleGenreClick = (genreId) => {
        setSelectedGenre(genreId);
      };


    const filteredMovies = data?.filter(
        (movie) =>   movie.genre === selectedGenre  || selectedGenre === null 
      );
    
  return (


    <div className='flex flex-col lg:flex-row  lg:justify-between items-center'>


    
    <nav  className=" ml-[4rem] flex flex-row xl:flex-col lg:flex-col md:flex-row sm:flex-row">

    {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-gray-200 block p-2 rounded mb-[1rem] text-lg ${
              selectedGenre === g._id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}

          >
            {g.name}
          </button>
        ))}


    </nav>


     <section className="flex flex-col justify-center items-center w-full lg:w-auto">

   <div className="w-full lg:w-[100rem] mb-8 ">

   <h1 className="mb-5">Choose For You</h1>
   <Sidebarutil  data={randomMovies} />
   </div>

   <div className="w-full lg:w-[100rem] mb-8">
          <h1 className="mb-5">Top Movies</h1>
          <Sidebarutil data={topMovies} />
        </div>

        <div className="w-full lg:w-[100rem] mb-8">
          <h1 className="mb-5">Choose Movie</h1>
          <Sidebarutil  data={filteredMovies}/>
        </div>
  

     </section>




    </div>
  )
}

export default MoviContainer