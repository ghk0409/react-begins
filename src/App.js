import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

// 라우터 역할
function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                {/* Home 화면 라우트 */}
                <Route path="/" element={<Home />} />
                {/* Detail 화면 라우트 */}
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
