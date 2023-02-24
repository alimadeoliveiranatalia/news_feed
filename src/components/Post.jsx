import styles from "./Post.module.css";

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/61992237?v=4" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Diego Rocha</strong>
                        <span>Android Developer</span>
                    </div>
                </div>
                <time 
                    title="Feb 23 04:11 pm"
                    dateTime="2023-02-23 16:11:02"                    
                >Public 04:11 pm</time>
            </header>
            
            <div className={styles.content}>
                <p>Hello Guys 👋</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
                    impedit velit soluta repellat harum molestias alias enim eos cumque modi? 
                    Provident harum, consequatur non alias quas sint nobis ipsam officiis?
                </p>
                <p>Follow me 👉 <a href="https://github.com/Dark3088">my profile</a></p>
                <p><a href="#">#space #universe</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea placeholder="Leave a comment"/>
                <footer><button type="submit">Publish</button></footer>
            </form>
        </article>
    )
}