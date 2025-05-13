import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <h1>Router Basics in React</h1>

      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route />
      </Routes>

    </div>
  )
}

export default App;