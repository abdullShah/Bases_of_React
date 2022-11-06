import { Header } from "../../components/Header/Header"
import { BookCard } from "../../components/BookCard/BookCard"

export const OneBookPage = (props) => {
    return <>
        <Header/>
        <BookCard id={props.id}/>
    </>
}