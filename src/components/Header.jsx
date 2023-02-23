import styles from "./Header.module.css";
import astronautaLogo from "../assets/astronauta.svg";

export function Header(){
    return (
        <header className={styles.header}>
            <img src={astronautaLogo} alt="Logo de Astronautas" />
            <strong>Feed</strong>
        </header>
    )
}