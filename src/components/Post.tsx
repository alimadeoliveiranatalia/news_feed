import styles from "./Post.module.css";
import EmojiPicker, { EmojiClickData, EmojiStyle, SkinTones, SuggestionMode, Theme } from "emoji-picker-react";
import { format, formatDistanceToNow } from "date-fns";
import enUs from "date-fns/locale/en-US"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Smiley } from "phosphor-react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps){
    const [comments, setComments] = useState([
        "Valeu pelo conteúdo! 🤩"
    ]);

    const [newCommentText, setNewCommentText] = useState("");

    const [showPicker, setShowPicker] = useState(false);

    const publishedDateFormatted = format(post.publishedAt, "LLL d ho", {
        locale: enUs
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: enUs,
    });

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([ ...comments, newCommentText]);

        setNewCommentText("");

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("");
        
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleSelectEmoji(emojiObject: EmojiClickData){
        const { emoji } = emojiObject;
        setNewCommentText((prevInput) => prevInput + emoji);
        setShowPicker(false);
    }

    function handleShowEmojiMenu(){
        setShowPicker(true);
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        hasBorder
                        src={post.author.avatarUrl} 
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted}
                    dateTime={post.publishedAt.toISOString()}                    
                >{publishedDateRelativeToNow}</time>
            </header>
            
            <div className={styles.content}>
               {post.content.map(line => {
                    if(line.type === "paragraph") {
                        return <p key={line.content} >{line.content}</p>;
                    } else if (line.type === "link"){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
               })} 
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>

                <textarea
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder="Leave a comment"
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <div className={styles.content_footer}>
                        <button type="submit" disabled={isNewCommentEmpty}>
                            Publish
                        </button>
                        <button
                         type="button"
                         onClick={handleShowEmojiMenu}
                         className={styles.button_emoji}
                        >
                            <Smiley size={32} />
                            { showPicker && (
                                <EmojiPicker 
                                    theme={Theme.DARK}
                                    emojiStyle={EmojiStyle.TWITTER}
                                    onEmojiClick={handleSelectEmoji}
                                    lazyLoadEmojis={true}
                                    suggestedEmojisMode={SuggestionMode.RECENT}
                                    defaultSkinTone={SkinTones.MEDIUM_DARK}
                            
                                /> )
                            }
                        </button>
                    </div>
                </footer>
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