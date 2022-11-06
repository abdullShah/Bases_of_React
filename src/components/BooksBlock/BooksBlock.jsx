import { InfoOneBook } from "../InfoOneBook/InfoOneBook"

export const BooksBlock = (props) => {
    return <section>
        {props.category.books.map((book) => <InfoOneBook book={book}/>)}
    </section>
}