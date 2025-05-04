import { useRef } from "react";
import UserInput from "./components/UserInput";

function App() {
  const inputRef = useRef(null);
  const passwordRef = useRef(null);

  const handleInput = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
  }

  const handlePassword = () => {
    console.log(passwordRef.current.value);
  }


  return (
    <div>
      <h1>forwardRef in React</h1>
      <UserInput ref1={inputRef} ref2={passwordRef} />
      <button onClick={handleInput}>Handle</button>
      <button onClick={handlePassword}>Handle Password</button>
    </div>
  )
}

export default App;