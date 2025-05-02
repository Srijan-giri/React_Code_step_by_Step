
import { useState } from "react";

function App(){
  const [count,setCount] = useState(0);
  const [color,setColor] = useState(true);
  return(
    <div>
       <h1>Multiple Condition in React</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      {
        count == 0 ? <h1>Condition 0</h1> :
        count == 1 ? <h1>Condition 1</h1> :
        count == 2 ? <h1>Condition 2</h1> :
        count == 3 ? <h1>Condition 3</h1> :
        count == 4 ? <h1>Condition 4</h1> :
        count == 5 ? <h1>Condition 5</h1> :
        <h1>Other Condition</h1>
      }

      <button onClick={()=>setColor(!color)}>Color Toggle</button>
      <p style={{'color': (color) ? 'red':'blue' }}>Dummy Text</p>
    </div>
  )
}

export default App;