import { BooksPage } from "./pages/BooksPage/BooksPage";
import { OneBookPage } from "./pages/OneBookPage/OneBookPage"
import { categories } from "./constants/mock"

export function App() {
    return <BooksPage id={categories[0].books[0]}/>
}