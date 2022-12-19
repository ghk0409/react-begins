import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.container}>
            <h1>
                <Link to={`/`}>ONGFLIX</Link>
            </h1>
        </div>
    );
}

export default Header;
