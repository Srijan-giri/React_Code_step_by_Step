import { Link, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <div>
            <h1>React Router 7 with React 19</h1>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <br />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path='/about' element={<About />}> </Route>
            </Routes>
        </div>
    )
}

export default App;