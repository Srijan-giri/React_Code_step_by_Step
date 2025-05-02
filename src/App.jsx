import {  useRef } from "react";

function App() {

  //* useRef is a uncontrolled component
  const inputRef = useRef(null);
  const h1Ref = useRef(null);
  const handleInput = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
    inputRef.current.placeholder = 'Enter Password';
    inputRef.current.value = '123';
  }

  const handleToggle = () => {
    if (inputRef.current.style.display == 'none') {
      inputRef.current.style.display = 'inline';
    }
    else {
      inputRef.current.style.display = 'none';
    }
  }

  const h1Handler = () => {
    h1Ref.current.style.color = 'green';
  }
  return (
    <div>
      <h1>useRef in React Application</h1>
      <button onClick={handleToggle}>Toogle</button>
      <br />
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={handleInput}>Focus</button>

      <h1 ref={h1Ref}>Code Step By Step</h1>
      <button onClick={h1Handler}>H1 Button</button>

    </div>
  )
}

export default App;