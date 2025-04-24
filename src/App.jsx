import {useState} from 'react';
import UserComponent from './component/UserComponent';

function App(){
  const [display,setDisplay] = useState(true);
  return(
    <div>
      <h1>Hello React</h1>
      <h2>Toggle and Hide Show</h2>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<UserComponent/>:null
      }

     
    </div>
  )
}

export default App;