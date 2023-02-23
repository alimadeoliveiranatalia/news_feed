import styles from "./Header.module.css";
import { SlRocket } from "react-icons/sl"
import astronautaLogo from "../assets/astronauta.svg";

export function Header(){
    return (
        <header className={styles.header}>
            <SlRocket  className={styles.icon}/>
            <strong>Feed</strong>
        </header>
    )
}