import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./compnents/fetchFilm/searchSlice";
import rateSlice from "./compnents/rateFilm/rateSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    rate: rateSlice,
  },
});

export default store;
