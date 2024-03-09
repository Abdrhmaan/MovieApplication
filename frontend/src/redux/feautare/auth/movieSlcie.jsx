import { createSlice } from "@reduxjs/toolkit";


const moviSlice = createSlice({
    name: "moviSlice",
    initialState: {
      
        moviesFilter : {
            searchTem : "",
            selectGenra : "",
            selectYear : "",
            selectSort : [],


        },


        filterMovies : [],
        movieYears : [],
        uniqueYears : []


    },
    
    reducers: {
        setMoviesFilter : (state, action) => {
            state.moviesFilter = {...state.moviesFilter , ...action.payload};
        },


                setFilterMovies : (state, action) => {
            state.filterMovies = action.payload;
        },


        setMovieYears : (state, action) => {
            state.movieYears = action.payload;
        },

        setUniqueYears : (state, action) => {
            state.uniqueYears = action.payload;
        },


    }

    


})


export default moviSlice.reducer

export const { setFilterMovies , setMovieYears, setUniqueYears , setMoviesFilter} = moviSlice.actions