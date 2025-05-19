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
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";


function App() {
  return (
    <div>

      {/* <Navbar />    */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}>Contact</Route>
          <Route path="/login" element={<Login />}>Login</Route>


          {/* <Route path="/users" element={<Users />}></Route> */}


          {/* Optional Segment */}
          {/* syntax : /users/list? --> so Users compoenent can open on both url */}
          <Route path="/users/list?" element={<Users />}></Route>


          {/* optional segment */}
          {/* <Route path="/users/:id" element={<UserDetails />}></Route> */}
          <Route path="/users/:id/:name?" element={<UserDetails />}></Route>

        </Route>

        <Route path="/college" element={<College />}>
          {/* <Route path="student" element={<Student />}></Route> */}
          <Route index element={<Student />}></Route>
          <Route path="department" element={<Department />}></Route>
          <Route path="student-details" element={<StudentDetails />}></Route>
        </Route>


        <Route path="/*" element={<h1>404 Page Not Found</h1>}></Route>

        {/* <Route path="/*" element={<Navigate to={"/"} />}></Route> */}

      </Routes>







    </div>
  )
}

export default App;