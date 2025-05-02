import { useState } from "react";
import Counter from "./compoenents/Counter";

function App(){
  const[fruit,setFruit]=useState("Apple");

  const updateFruit=()=>{
    setFruit("Banana");
  }

  return(
    <div>
      <h1>Hello React</h1>
      <h1>State</h1>
      <h2>Fruit:{fruit}</h2>
      <button onClick={updateFruit}>Update Fruit</button>
      <Counter/>
    </div>
  )
}

export default App;