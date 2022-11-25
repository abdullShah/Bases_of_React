import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { bookOneSlice } from "./bookOne";

export const store = configureStore({
    reducer: combineReducers({
      book: bookSlice.reducer,
      bookOne: bookOneSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });