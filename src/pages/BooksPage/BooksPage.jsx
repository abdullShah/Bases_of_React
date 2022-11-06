import { Header } from "../../components/Header/Header"
import { SelectionMenu } from "../../components/SelectionMenu/SelectionMenu"
import { categories } from "../../constants/mock"

export const BooksPage = () => {
    return<>
        <Header/>
        <SelectionMenu categories={categories}/>    
    </>      
}