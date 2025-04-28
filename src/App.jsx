import { useState } from "react";
import Counter from "./components/Counter";

function App(){
  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);
  const [isDisplay,setIsDisplay] = useState(true);
  return(
    <div>
      <h1>useEffect in Life Cycle Method</h1>
      
      {
        isDisplay && <Counter counter={counter} data={data}/>
      }
      
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
      <button onClick={()=>setIsDisplay(!isDisplay)}>Toggle</button>
    </div>
  )
}

export default App; 