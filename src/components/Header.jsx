import styles from "./Header.module.css";
import { RocketLaunch } from "phosphor-react"

export function Header(){
    return (
        <header className={styles.header}>
            <RocketLaunch  className={styles.icon}/>
            <strong>Feed</strong>
        </header>
    )
}