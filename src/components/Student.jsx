function Student({student}){
  return(
    <div>   
        <ul>
            <li>
                <h3>Name:{student.name}</h3>
                <ul>
                    <li>Email: {student.age}</li>
                    <li>Age : {student.email}</li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default Student;