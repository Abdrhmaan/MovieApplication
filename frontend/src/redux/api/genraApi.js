

import { Genr_Url } from "../contstant";
import { apiSlice } from "./ApiSlice";



export const genraApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    

    creatGenra: builder.mutation({
      query: (data) => ({
        url: `${Genr_Url}`,
        method: "POST",
        body: data,
      }),
    }),

    updatgenra: builder.mutation({
      query: ({id , updatedgnera}) => ({
        url: `${Genr_Url}/${id}`,
        method: "PUT",
        body: updatedgnera,
      }),
    }),

    delledGenra: builder.mutation({
      query: (id) => ({
        url: `${Genr_Url}/${id}`,
        method: "DELETE",

      }),
    }),


    fecthGenra: builder.query({
      query: () => ({
        url: `${Genr_Url}`,
        method: "Get",
    

      }),
    }),

    getOnegenra: builder.query({
        query: (id) => ({
          url: `${Genr_Url}/${id}`,
          method: "GET",
      
  
        }),
      }),


   
    

  }),
});




export const {useCreatGenraMutation , useFecthGenraQuery, useGetOnegenraQuery, useDelledGenraMutation , useUpdatgenraMutation} = genraApi