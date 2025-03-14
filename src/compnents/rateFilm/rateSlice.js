import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratedFilm: [],
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    addRateFilm(state, action) {
      state.ratedFilm.push(action.payload);
    },
    removeRateFilm(state, action) {
      state.rateFilm = state.rateFilm.filter(
        (film) => film.imdbId !== action.payload
      );
    },
  },
});

export default rateSlice.reducer;
export const { addRateFilm, removeRateFilm } = rateSlice.actions;
export function findAFilmBasedOnId(imdbID) {
  return (state) =>
    state.rate.ratedFilm?.find((film) => film.imdbID === imdbID)
      ?.yourRatingScore;
}

// Calculate total runtime of all rated films
export function selectTotalRuntime(state) {
  return state.rate.ratedFilm.reduce((total, film) => {
    const runtime = parseInt(film.Runtime); // Convert "169 min" to 169
    return total + (isNaN(runtime) ? 0 : runtime);
  }, 0);
}

// Calculate average IMDb rating
export function selectAverageIMDBRating(state) {
  const totalFilms = state.rate.ratedFilm.length;
  if (totalFilms === 0) return 0;

  const totalIMDBRating = state.rate.ratedFilm.reduce((sum, film) => {
    return sum + parseFloat(film.imdbRating);
  }, 0);

  return (totalIMDBRating / totalFilms).toFixed(1);
}

// Calculate average user rating score
export function selectAverageUserRating(state) {
  const totalFilms = state.rate.ratedFilm.length;
  if (totalFilms === 0) return 0;

  const totalUserRating = state.rate.ratedFilm.reduce((sum, film) => {
    return sum + (film.yourRatingScore || 0);
  }, 0);

  return (totalUserRating / totalFilms).toFixed(1);
}
