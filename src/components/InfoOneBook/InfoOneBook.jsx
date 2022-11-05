import styles from "./styles.module.css"
import classNames from "classnames";
import {useState} from "react";

export const InfoOneBook = (props) => {
    const [count, setCount] = useState(0);
    
    return <div className={classNames(styles.itemBlock)}>
        <div>
            <span className={classNames(styles.name)}>{props.book.name}</span>
            <span className={classNames(styles.addition)}>{props.book.author}</span>
            <span className={classNames(styles.addition, styles.classForStar)}>{props.book.genre}</span>
            <span className={classNames(styles.price)}>{props.book.price} ₽</span>
        </div>
        <div className={classNames(styles.countBlock)}>
            <button className={classNames(styles.resetButton, {[styles.disabled]: count === 0})} onClick={() => setCount(count - 1)} disabled={count === 0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm12 10H7v-2h10v2z"></path></svg>
            </button>
            <span className={classNames(styles.countSpan, {[styles.disabled]: count === 0})}>{count}</span>
            <button className={classNames(styles.resetButton, {[styles.disabled]: count === 6})} onClick={() => setCount(count + 1)} disabled={count === 6}>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm2-10h4V7h2v4h4v2h-4v4h-2v-4H7v-2z"></path></svg>
            </button>
        </div>
    </div>
}