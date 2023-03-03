﻿import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0);
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/C5603AQGr2PwmekdtxA/profile-displayphoto-shrink_400_400/0/1647119064932?e=1682553600&v=beta&t=f38UH743StnDa-puiERuyEb7jEcDhhqp8wb1EWS2vns" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Natália Lima</strong>
                            <time title="Feb 24 at 12:48 am">public 1h ago</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}