import { InfoBook } from "../InfoBook/InfoBook"
import { DescriptionBook } from "../DescriptionBook/DescriptionBook"
import styles from "./styles.module.css"
import classnames from 'classnames';

export const AboutBook = (props) => {
    return <section className={classnames(styles.generalSection)}>
        <InfoBook id={props.id}/>    
        <DescriptionBook id={props.id}/>
    </section>
}