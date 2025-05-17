import { Routes, Route, Navigate } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import '../public/app.css'
import Home from "./components/Home";
import College from "./components/College";
import Student from "./components/Student";
import Department from "./components/Department";
import StudentDetails from "./components/StudentDetails";



function App() {
  return (
    <div>

      {/* <Navbar /> */}
      <Routes>

        {/* Route Layout is used to create header and footer and also remove the header footer from the page */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />}>Home</Route>

          {/* Route Prefixes */}


          {/* here we can also create route grouping */}
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/about" element={<About />}></Route>
              <Route path="/in/user/contact" element={<Contact />}>Contact</Route>
              <Route path="/in/user/login" element={<Login />}>Login</Route>
            </Route>
          </Route>


        </Route>

        {/* I want that when i click on the college link it should open the student  page */}

        <Route path="/college" element={<College />}>

          {/* index route */}
          <Route index element={<Student />}></Route>
          <Route path="department" element={<Department />}></Route>
          <Route path="student-details" element={<StudentDetails />}></Route>
        </Route>

        <Route path="/*" element={<Navigate to={"/"} />}></Route>
      </Routes>





    </div>
  )
}

export default App;