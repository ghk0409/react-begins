import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("created :)");
        return () => console.log("destroyed :(");
    }, []);
    return <h1>Hellooo~</h1>;
}

function App() {
    // const [counter, setCounter] = useState(0);
    // const [keyword, setKeyword] = useState("");

    // const onClick = () => setCounter((prev) => prev + 1);
    // const onChange = (event) => setKeyword(event.target.value);
    // console.log("rerendering!! i run all the time");

    // // 처음 한 번만 실행
    // useEffect(() => {
    //     console.log("Call the API");
    // }, []);
    // // keyword가 5글자 이상일 경우에만 실행 (deps -> keyword 설정)
    // useEffect(() => {
    //     if (keyword !== "" && keyword.length > 5) {
    //         console.log("Search for", keyword);
    //     }
    // }, [keyword]);

    // return (
    //     <div>
    //         <input
    //             placeholder="Search for Movie!!"
    //             type="text"
    //             value={keyword}
    //             onChange={onChange}
    //         />
    //         <h1 className={styles.title}>{counter}</h1>
    //         {/* <Button text={"WOW!!"} /> */}
    //         <button onClick={onClick}>BUTTON</button>
    //     </div>
    // );

    // cleanUp 예시
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            <button onClick={onClick}>{showing ? "Show" : "Hide"}</button>
            {showing ? <Hello /> : null}
        </div>
    );
}

export default App;
