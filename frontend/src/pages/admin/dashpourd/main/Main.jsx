
import React from 'react'
import { useGetalluserQuery } from '../../../../redux/api/userapiSlice'
import { useGetallmoviesQuery, useTopMoviesQuery } from '../../../../redux/api/MovirapiSlice';
import SecondyCard from './SecondyCard';
import VedioCard from './VedioCard';
import RealtimeCard from './RealtimeCard';

const Main = () => {

   const {data:visitors}  =  useGetalluserQuery()
   const { data: topMovies } = useTopMoviesQuery();
   const { data: allMovies } = useGetallmoviesQuery();
   


   const totalCommentsLength = allMovies?.map((m) => m.
   Numperviews
   );
   console.log(totalCommentsLength)

   const sumOfCommentsLength = totalCommentsLength?.reduce(
    (acc, length) => acc + length,
    0
  );
   
  return (
    <div>

      <section className="flex justify-around">
      <div className="ml-[14rem] mt-10">

      
      <div className='-translate-x-4 flex'>

        <SecondyCard 

pill="Users"
content={visitors?.length}
info="20.2k more then usual"
gradient="from-teal-500 to-lime-400"
        
        />

<SecondyCard
              pill="Comments"
              content={sumOfCommentsLength}
              info="742.8 more then usual"
              gradient="from-[#CCC514] to-[#CDCB8E]"
            />


<SecondyCard
              pill="Movies"
              content={allMovies?.length}
              info="372+ more then usual"
              gradient="from-green-500 to-lime-400"
            />
      </div>



      <div className="flex justify-between w-[90%] text-white mt-10 font-bold">
            <p>Top Content</p>
            <p>Comments</p>
          </div>

          {topMovies?.map((movie) => (
            <VedioCard
              key={movie._id}
              image={movie.image}
              title={movie.name}
              date={movie.year}
              comments={movie.numReviews}
            />
          ))}
        </div>

        <div>





        <RealtimeCard />




      
        </div>


        </section>
   


    </div>
  )
}

export default Main