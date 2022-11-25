import { BooksPage } from "./pages/BooksPage/BooksPage";
import { OneBookPage } from "./pages/OneBookPage/OneBookPage"
import { categories } from "./constants/mock"
import { Provider } from "react-redux";
import { store } from "./store";

export function App() {
    return (
        <Provider store={store}>
            <BooksPage id={categories[0].books[0]}/>
        </Provider>
    )
}