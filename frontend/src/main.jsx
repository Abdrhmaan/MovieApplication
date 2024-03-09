import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from './redux/store.js'
import { Route, RouterProvider, createRoutesFromElements } from "react-router";

import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.jsx'


import { Registar } from './pages/auth/Registar.jsx'
import Login from './pages/auth/Login.jsx'
import Profile from './pages/user/Profile.jsx'
import PrivateRoute from './pages/auth/PrivateRoute.jsx'
import AdminRoute from './pages/admin/AdminRoute.jsx'
import GenraList from './pages/admin/GenraList.jsx'
import CreatMovies from './pages/admin/CreatMovies.jsx'
import Movielist from './pages/admin/Movielist.jsx'
import UpdateMovie from './pages/admin/UpdateMovie.jsx'
import Allmovie from './components/movies/Allmovie.jsx'
import MovieDetails from './components/movies/MovieDetails.jsx'
import Allcomentes from './pages/admin/Allcomentes.jsx'
import Admindashpourd from './pages/admin/dashpourd/Admindashpourd.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route index={true}  path='/'  element={<Home/>}/>
      <Route   path='/register'  element={<Registar/>}/>
      <Route   path= "/login" element={<Login/>}/>
      <Route   path= "/movies" element={<Allmovie/>}/>
      <Route   path= "/movies/:id" element={<MovieDetails/>}/>

      <Route path='' element={<PrivateRoute/>}>
      <Route   path= "/profile" element={<Profile/>}/>

      </Route>
    

    

      <Route path='' element={<AdminRoute/>}>
      <Route path="/admin/movies/genra" element={<GenraList/>}/>
      <Route path="/admin/movies/movie" element={<CreatMovies/>}/>
      <Route path="/admin/movilist" element={<Movielist/>}/>
      <Route path="/admin/movies/update/:id" element={<UpdateMovie/>}/>
      <Route path="/admin/movies/allcoments" element={<Allcomentes/>}/>

    
      <Route path="/admin/movies/dashboard" element={<Admindashpourd/>}/>

     
     


      </Route>
     

     
   









    </Route>
  )

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>,
)
