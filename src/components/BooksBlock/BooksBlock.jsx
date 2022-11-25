import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadBooksOneIfNotExist } from "../../store/bookOne/loadBooksOneIfNotExist";
import { selectBooksOne, selectIsBooksLoading } from "../../store/bookOne/selectors";
import { InfoOneBook } from "../InfoOneBook/InfoOneBook"

export const BooksBlock = ( props) => {
    /* const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksOneIfNotExist(bookId));
    }, [bookId]); */

    /* const category = useSelector((state) => selectBooksOne(state)); */
    const isLoading = useSelector((state) => selectIsBooksLoading(state));

   /*  if (isLoading){
        return <span>Loading...</span>
    }
    if (!category){
        return null;
    } */
    console.log("ТУТ");
    /* console.log(props.category); */

    return <section>
        {props.category.books.map((book) => <InfoOneBook book={book}/>)}
    </section> 
}