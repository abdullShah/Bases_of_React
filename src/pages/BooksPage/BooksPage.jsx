import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Header } from "../../components/Header/Header"
import { SelectionMenu } from "../../components/SelectionMenu/SelectionMenu"
import { categories } from "../../constants/mock"
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist"

export const BooksPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist);
    }, [])

    return <>
        <Header/>
        <SelectionMenu categories={categories}/>    
    </>      
}