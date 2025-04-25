import { useState } from "react";

function App(){

  const [skills,setSkills] = useState([]);
  const handleSkils =(event)=>{
      // console.log(event.target.value,event.target.checked);
      // setSkills(event.target.value);
      if(event.target.checked){
        setSkills([...skills,event.target.value])
      }
      else{
        setSkills([...skills.filter((item)=> item!=event.target.value )])
      }
      
  }
  return(
    <div>
      <h1>Handle Checkbox in React</h1>
      <input type="checkbox" id="php" value='php' onChange={handleSkils}/>
      <label htmlFor="php">Php</label>
      <br /><br />
      <input type="checkbox" id="js" value='js'  onChange={handleSkils}/>
      <label htmlFor="js">JS</label>
      <br /><br />
      <input type="checkbox" id="python" value='python'  onChange={handleSkils}/>
      <label htmlFor="python">Python</label>
      <br /><br />
      <input type="checkbox" id="java" value='java'  onChange={handleSkils}/>
      <label htmlFor="java">Java</label>

      <p>{skills.toString()}</p>
    </div>
  )
}

export default App;