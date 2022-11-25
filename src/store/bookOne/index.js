import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";
import { categories } from "../../constants/mock";


const initialState = {
    entities: { categories },
    ids: [],
    status: Statuses.success,
  };
  

export const bookOneSlice = createSlice({
    name: "bookOne",
    initialState,
    reducers: {
      startLoading: (state) => {
        state.status = Statuses.inProgress;
      },
      successLoading: (state, action) => {
        state.status = Statuses.success;
        state.entities = { ...state.entities, ...action.payload.entities };
        state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
      },
      failLoading: (state) => {
        state.status = Statuses.failed;
      },
    },
  });