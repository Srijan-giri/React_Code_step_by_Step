import Student from "./Student";

function College({college}){
    console.log(college);
    return(
        <div style={{backgroundColor:"#ccc",borderBottom:'2px solid black',padding:'20px',margin:'10px',borderRadius:'10px'}}>
            <h1>College : {college.name}</h1>
            <ul>
                <li>
                    <h3>City : {college.city}</h3>
                </li>
                <li>
                    <h3>Website :
                        <span>
                            <a href={college.website}>{college.website}</a>
                        </span>
                    </h3>
                </li>
                <li>
                    <h3>Students</h3>
                    {
                        college.students.map((students,index)=>(
                            <div key={index}>
                                <Student student = {students}/>
                            </div> 
                        ))
                    } 
                </li>
            </ul>
        </div>
    )
}

export default College;