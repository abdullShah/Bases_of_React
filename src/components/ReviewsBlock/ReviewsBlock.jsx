import { ReviewBlock } from "../ReviewBlock/ReviewBlock"
import styles from "./styles.module.css"
import classnames from "classnames";

export const ReviewsBlock = (props) => {
    const reviews = props.id.reviews;

    return <section className={classnames(styles.section)}>
        {reviews.map((review) => <ReviewBlock author={review.user.name} review={review.text}/>)}
    </section>
}