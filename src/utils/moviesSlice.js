import {  createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies:null,
        trendingMovies:null,
        upCommingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
          state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
          state.popularMovies= action.payload;
        },
        addTrailerVideo:(state, action)=>{
          state.trailerVideo = action.payload; 
        },
        addTrendingMovies:(state, action)=>{
            state.trendingMovies= action.payload;
        },
        addUpCommingMovies:(state, action)=>{
            state.upCommingMovies =  action.payload;
        }
    }
});

export const { 
    addNowPlayingMovies,
     addTrailerVideo,
    addPopularMovies,
    addTrendingMovies,
    addUpCommingMovies,
 } = moviesSlice.actions;

export default moviesSlice.reducer;