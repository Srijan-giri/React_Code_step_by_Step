function Student({student}){
   console.log(student);
    return(
        <div>
            <hr />
            <h2>Student Details</h2>
            <h3>Name : {student.name}</h3>
            <h3>Age : {student.age}</h3>
            <h3>Email : {student.email}</h3>
        </div>
    )
}

export default Student;