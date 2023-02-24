import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/67019361?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Natália Lima</strong>
                            <time title="Feb 24 at 12:48 am">public 1h ago</time>
                        </div>
                        <button title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Very Good Diego! Success 👏 👏 👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}