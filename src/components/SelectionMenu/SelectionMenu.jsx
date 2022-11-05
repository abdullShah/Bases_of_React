import { BooksBlock } from "../BooksBlock/BooksBlock"
import styles from "./styles.module.css"
import classnames from 'classnames';
import {useState} from "react";

export const SelectionMenu = (props) => {
    const [activeCategories, setActiveCategories] = useState(props.categories[0]);

    return <main className={classnames(styles.main)}>
    <section className={classnames(styles.buttonSection)}>
        {props.categories.map((categories) => <button className={classnames(styles.oneButton, {[styles.activeTab]: activeCategories.id === categories.id})} key={categories.id} onClick={() => setActiveCategories(categories)}>{categories.name}</button>)}
    </section>
        
    <BooksBlock category={activeCategories}/>
    
    </main>
}