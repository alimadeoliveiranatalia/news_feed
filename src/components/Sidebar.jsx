import styles from "./Sidebar.module.css";

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=50" 
                className={styles.cover}
            />
            
            <div className={styles.profile}>
                <strong>Natália Lima</strong>
                <span>aerospace engineer</span>
            </div>

            <footer>
                <a href="#">Edit your profile</a>
            </footer>
        </aside>
    )
}