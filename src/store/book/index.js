import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";
import { categories } from "../../constants/mock";


const initialState = {
    entities: categories,
    ids: [],
    status: Statuses.success,
  };
  

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
      startLoading: (state, action) => {
        state.status = Statuses.inProgress;
        state.entities = {};
        state.ids = [];
      },
      successLoading: (state, action) => {
        state.status = Statuses.success;
        state.entities = action.payload.entities;
        state.ids = action.payload.ids;
      },
      failLoading: (state, action) => {
        state.status = Statuses.failed;
        state.entities = {};
        state.ids = [];
      },
    },
  });