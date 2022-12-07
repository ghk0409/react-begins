import Button from "./Button";
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <h1 className={styles.title}>Welcome ReactJS!!</h1>
            <Button text={"WOW!!"} />
        </div>
    );
}

export default App;
