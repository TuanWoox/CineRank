import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  imdbId: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.imdbId = "";
    },
    setImdbID(state, action) {
      if (state.imdbId) state.imdbId = "";
      else state.imdbId = action.payload;
    },
    closeOneFilm(state, action) {
      state.imdbId = "";
    },
  },
});

export default searchSlice.reducer;

export const { setSearch, setImdbID, closeOneFilm } = searchSlice.actions;
