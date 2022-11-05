import styles from "./styles.module.css"
import classnames from "classnames";

export const ReviewBlock = (props) => {
    return <article className={classnames(styles.article)}>
        <span className={classnames(styles.bold)}>{props.author}</span>
        <p>{props.review}</p>
    </article>
}