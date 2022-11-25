import { bookSlice, bookOneSlice } from "./index";
import { prepareData } from "../utils";
import { selectBooks } from "./selectors";

export const loadBooksOneIfNotExist = (bookId) => (dispatch, getState) => {
  /* if (selectBooks(getState())?.length > 0) {
    return;
  } */
  
  dispatch(bookOneSlice.actions.startLoading());
  fetch(`http://localhost:3000/api/booksOne?id=${bookId}`)
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookOneSlice.actions.successLoading(prepareData(books)));
    })
    .catch(() => {
      dispatch(bookOneSlice.actions.failLoading());
    });
};
