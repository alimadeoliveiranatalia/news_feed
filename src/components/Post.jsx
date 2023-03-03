import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import enUs from "date-fns/locale/en-US"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";


export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([
        "Valeu pelo conteúdo! 🤩"
    ]);

    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormatted = format(publishedAt, "LLL d ho", {
        locale: enUs
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: enUs,
    });

    function handleCreateNewComment(){
        event.preventDefault();

        console.log("Hi! 😏");

        setComments([ ...comments, newCommentText]);

        setNewCommentText("");

    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder
                        src={author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}                    
                >{publishedDateRelativeToNow}</time>
            </header>
            
            <div className={styles.content}>
               {content.map(line => {
                    if(line.type === "paragraph") {
                        return <p key={line.content} >{line.content}</p>;
                    } else if (line.type === "link"){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
               })} 
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea name="comment" value={newCommentText} onChange={handleNewCommentChange} placeholder="Leave a comment"/>
                <footer><button type="submit">Publish</button></footer>
            </form>
            <div className={styles.commentList}>
                { comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}