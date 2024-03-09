

import React from 'react'
import Header from '../components/movies/Header'
import MoviContainer from '../components/movies/MoviContainer'

const Home = () => {
  return (
    <div>

      <Header/>



      <section className='mt-[10rem]'>
        <MoviContainer />
      </section>
    </div>
  )
}

export default Home