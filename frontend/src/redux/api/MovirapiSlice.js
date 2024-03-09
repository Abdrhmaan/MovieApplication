


import {Movie_api } from "../contstant";
import {UPLOAD_URL } from "../contstant";
import { apiSlice } from "./ApiSlice";



export const moviaapiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    

    createMovies: builder.mutation({
      query: (data) => ({
        url: `${Movie_api}/creatmovies`,
        method: "POST",
        body: data,
      }),
    }),


    
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: `${UPLOAD_URL}/uploads`,
        method: "POST",
        body: formData,
      }),
    }),

    updateMovies: builder.mutation({
      query: ({ id, updatedMovie }) => ({
        url: `${Movie_api}/update/${id}`,
        method: "PUT",
        body:updatedMovie
      }),
    }),

    addtoreviewmovies : builder.mutation({
        query: ({id , rating ,comment}) => ({
          url: `${Movie_api}/add/${id}`,
          method: "POST",
          body: {id , rating ,comment},
        }),
      }),



    deleteMovies: builder.mutation({
      query: (id) => ({
        url: `${Movie_api}/dlelet/${id}`,
        method: "DELETE",

      }),
    }),

    deletecommente: builder.mutation({
      query: ({ movieId, reviewId }) => ({
        url: `${Movie_api}/dleted-commnete`,
        method: "DELETE",
        body: { movieId, reviewId },
      }),
      }),


    getallmovies: builder.query({
      query: () => ({
        url: `${Movie_api}/allmovies`,
        method: "GET",
    

      }),
    }),

    getOneMovie: builder.query({
        query: (id) => ({
          url: `${Movie_api}/one/${id}`,
          method: "GET",
      
  
        }),
      }),


      newMovies: builder.query({
        query: () => ({
          url: `${Movie_api}/newMovies`,
          method: "GET",
      
  
        }),
      }),
      
      topMovies: builder.query({
        query: () => ({
          url: `${Movie_api}/top`,
          method: "GET",
      
  
        }),
      }),

      randommovies: builder.query({
        query: () => ({
          url: `${Movie_api}/randommovies`,
          method: "GET",
      
  
        }),
      }),



  




   
    

  }),
});




export const {   useUploadImageMutation  ,useCreateMoviesMutation  ,useUpdateMoviesMutation, useGetallmoviesQuery ,useGetOneMovieQuery , useAddtoreviewmoviesMutation , useDeleteMoviesMutation  , useTopMoviesQuery , useNewMoviesQuery ,  useDeletecommenteMutation , useRandommoviesQuery     } = moviaapiSlice