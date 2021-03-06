import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reccomandans : null,
    newDisnay : null,
    original : null,
    trending : null,
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      setMovies: (state, action) => {
        state.recommend = action.payload.recommend;
        state.newDisnay = action.payload.newDisnay;
        state.original = action.payload.original;
        state.trending = action.payload.trending;
        
      },
    },
  });


export const { setMovies } = movieSlice.actions;


export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisnay;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;


export default movieSlice.reducer;

