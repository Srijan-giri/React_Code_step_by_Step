function College({college}){
    console.log(college);
  return(
    <div>
        <h2>College List : </h2>
        <p>{college[0]}</p>
        <p>{college[1]}</p>
        <p>{college[2]}</p>
        <p>{college[3]}</p>
        <p>{college[4]}</p>
    </div>
  )
}

export default College;