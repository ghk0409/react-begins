import { useState } from "react";

function App() {
    // 투두 state와 투두리스트 state 생성
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    // input value => toDo
    const onChange = (event) => setToDo(event.target.value);
    // :toDo값을 toDos리스트에 저장
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        // :toDos에 toDo를 넣은 후 빈 값으로 초기화
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };
    // :toDo값 삭제
    const delClick = (index) => {
        setToDos((currentArray) =>
            currentArray.filter((_, curIndex) => curIndex !== index)
        );
    };
    // const delClickOnce = (event) => {
    //     const index = parseInt(event.target.className);
    //     setToDos((currentArray) =>
    //         currentArray.filter((_, curIndex) => curIndex !== index)
    //     );
    // };

    console.log(toDos);

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                    type="text"
                    placeholder="Write your to do!"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button on Click={() => delClick(index)}>
                            ❌
                        </button>
                        {/* <button className={index} onClick={delClickOnce}>
                            ❌
                        </button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
