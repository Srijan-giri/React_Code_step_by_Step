import College from "./components/College";
import Student from "./components/Student";
import { useState } from "react";
import Teacher from "./components/Teacher";

function App(){
  let name = "Srijan Giri";
  let age = 20;
  let email = "srijangiri2003@gmail.com";

  let student1 = {
    name : "Srijan Giri",
    age : 20,
    email : "srijangiri2003@gmail.com"
  }

  let student2 = {
    name : "Anand Singh",
    age : 30,
    email : "anand@gmail.com"
  }

  let student3 = {
    name : "Axar Patel",
    age : 40,
    email : "axar3@gmail.com"
  }


  let college = ['MIT','IIT','NIT','DU','JU'];

  const[teacher,setTeacher] = useState();
  return(
    <div>
      <h1>Props in React</h1>

      {/*
           Send Variable
       */}
      {/* <Student name={"Srijan Giri"} age={20} email={"srijangiri2003@gmail.com"}/> */}
      {/* <Student  name={name} age={age} email={email}/> */}


      {/*
           Send Object
       */}

      <Student student={student1}/>
      <Student student={student2}/>
      <Student student={student3}/>
      
      {/*
           Send Array
       */}

       <College college = {college}/>


       {/*
           Send Data in Commponent With Click
       */}

       <button onClick={()=>setTeacher('Ajay Kumar')}>Update Teacher</button>
       {teacher && <Teacher name={teacher}/>}



    </div>
  )
}

export default App;