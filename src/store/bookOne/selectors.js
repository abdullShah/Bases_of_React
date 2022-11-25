import { Statuses } from "../../constants/statuses";

export const selectBookOneModule = (state) => state.book;

export const selectBooksOne = (state) =>
  Object.values(selectBookOneModule(state).entities);

export const selectIsBooksLoading = (state) =>
selectBookOneModule(state).status === Statuses.inProgress;
  
