import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Get Input Value in React</h1>
      <input type="text" placeholder="Enter Name" onChange={(event) => setInput(event.target.value)} value={input} />
      <p>{input}</p>{ }
      <br />
      <button onClick={() => setInput("")}>Clear</button>
    </div>
  )
}

export default App;

