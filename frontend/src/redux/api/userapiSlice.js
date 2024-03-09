
import { USERS_URL } from "../contstant";
import { apiSlice } from "./ApiSlice";



export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getalluser : builder.query({
      query: () => ({
        url: `${USERS_URL}/all`,
        method: "GET",
      }),
    }),

    

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",

      }),
    }),


    updateProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update`,
        method: "PUT",
        body :  data

      }),
    }),
   
    
   
    

  }),
});

export const {

  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateProfileMutation,
  useGetalluserQuery
  

} = userApiSlice