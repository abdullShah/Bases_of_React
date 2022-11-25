import { BooksBlock } from "../BooksBlock/BooksBlock"
import styles from "./styles.module.css"
import classnames from 'classnames';
import {useState} from "react";
import { useSelector } from "react-redux";
import { selectBooks } from "../../store/book/selectors";

export const SelectionMenu = (props) => {
    const books = useSelector((state) => selectBooks(state));
    console.log(books);

    const [activeCategories, setActiveCategories] = useState(books[0]); /*props.categories[0]*/

    return <main className={classnames(styles.main)}>
    <section className={classnames(styles.buttonSection)}>
        {books.length > 0 && books.map((categories) => <button className={classnames(styles.oneButton, {[styles.activeTab]: activeCategories.id === categories.id})} key={categories.id} onClick={() => setActiveCategories(categories)}>{categories.name}</button>)}
    </section>
    
    {console.log(activeCategories)}
    {activeCategories && <BooksBlock category={activeCategories}/>}
    
    </main>
}