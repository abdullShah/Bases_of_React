import styles from "./styles.module.css"
import classnames from 'classnames';

export const DescriptionBook = (props) => {
    return <section className={classnames(styles.section)}>
    <span className={classnames(styles.bold)}>Аннотация</span>
    <p>{props.id.annotation}</p>
</section>
}