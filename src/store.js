import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./redux/Reducer/movieReducer";

const store = configureStore({
  reducer: {
    movieBooking: movieReducer,
  },
});

export default store;
