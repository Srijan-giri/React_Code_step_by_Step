import { useState } from "react";

function App(){
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  return(
    <div>
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input type="text"  placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} value={name}/> 
        <br/><br/>
        <input type="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)} value={password}/>
        <br/><br/>
        <input type="text" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)} value={email}/>
        <br/><br/>
        <button>Submit</button>
        <button onClick={()=>{setName('');setPassword('');setEmail('')}}>Clear</button>
        <p>{name}</p>
        <p>{email}</p>
        <p>{password}</p>
      </form>
    </div>
  )
}

export default App;