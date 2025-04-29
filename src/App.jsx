import { useState } from "react";
import User from "./components/User";

function App(){
  const [changeColor,setChangeColor] = useState('grey');
  let users = [
    {
      name:'Anil Sadhu',
      position:'Software Developer'
    },
    {
      name:'Amit Mandal',
      position:'Software Developer'
    },
    {
      name:'Akash Das',
      position:'Software Developer'
    },
    {
      name:'Amlan Basu',
      position:'Software Developer'
    }
  ]
  return(
    <div>
      <h1>Hello React</h1>
      <button>Change Color</button>
      <button>Default Color</button>
      {
        users.map((user, index) => (
          <div key={index}>
            <User user={user} />
          </div>
        ))
      }
      
    </div>
  )
}

export default App;