import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClick = () => setCounter((prev) => prev + 1);
    console.log("rerendering!! i run all the time");

    useEffect(() => {
        console.log("Call the API");
    }, []);
    return (
        <div>
            <h1 className={styles.title}>Welcome ReactJS!! {counter}</h1>
            {/* <Button text={"WOW!!"} /> */}
            <button onClick={onClick}></button>
        </div>
    );
}

export default App;
