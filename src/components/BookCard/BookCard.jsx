import { AboutBook } from "../AboutBook/AboutBook"
import { ReviewsBlock } from "../ReviewsBlock/ReviewsBlock"
import styles from "./styles.module.css"
import classnames from 'classnames';

export const BookCard = (props) => {
    return <main className={classnames(styles.main)}>
        <AboutBook id={props.id}/>
        <ReviewsBlock id={props.id}/>
    </main>
}