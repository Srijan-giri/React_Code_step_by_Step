import { Routes, Route, Navigate } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import '../public/app.css'
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/login" element={<Login />}>Login</Route>

        // Making 404 Not Found Page
        {/* 

           <Route path="/*" element={<NotFound/>} ></Route>

        */}

        // Using Navigate Component for wrong route request
        <Route path="/*" element={<Navigate to={'/login'} />} ></Route>

      </Routes>





    </div >
  )
}

export default App;