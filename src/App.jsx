import { Routes, Route } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import '../public/app.css'
import Home from "./components/Home";


function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/login" element={<Login />}>Login</Route>
      </Routes>





    </div>
  )
}

export default App;