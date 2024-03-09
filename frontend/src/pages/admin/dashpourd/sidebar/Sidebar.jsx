
import React from 'react'

import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="-translate-y-10 flex h-screen fixed mt-10 border-r-2 border-[#242424] ml-8">

<aside  className="text-white w-64 flex-shrink-0">
 <ul className="py-4">


<li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6">
    <Link
      to="/admin/movies/dashboard"
      className="block p-2 ml-20 mb-10"
    >
      Dashboard
    </Link>
  
</li>

<li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6">
    <Link
      to="/admin/movies/movie"
      className="block p-2 ml-20 mb-10"
    >
      CreateMovie
    </Link>
  
</li>
<li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6">
    <Link
      to="/admin/movies/genra"
      className="block p-2 ml-20 mb-10"
    >
      CreateGenra
    </Link>
  
</li>
<li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6">
    <Link
      to="/admin/movilist"
      className="block p-2 ml-20 mb-10"
    >
      All Movies
    </Link>
  
</li>

<li className="text-lg  bg-gradient-to-b from-green-500 to-lime-400 rounded-full -translate-x-6">
    <Link
      to="/admin/movies/allcoments"
      className="block p-2 ml-20 mb-10"
    >
  All Commnets
    </Link>
  
</li>
 </ul>

</aside>

    </div>
  )
}

export default Sidebar