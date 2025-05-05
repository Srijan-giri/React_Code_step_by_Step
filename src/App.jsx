import { useTransition } from "react";
import { useState } from "react";

function App() {

  // const [transtion, setTransition] = useState(false);
  const [pending, startTransition] = useTransition();

  console.log(pending);

  const handleClick = async () => {

    /** --- Before Used ---
    setTransition(true);
    await new Promise((res) => setTimeout(res, 3000));
    setTransition(false);
    */


    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 3000));
    })




  }
  return (
    <div>
      <h1>useTransition Hook in React</h1>
      <div>
        {
          pending ?
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="icon" />
            : null
        }
        <br />
        <button onClick={handleClick} disabled={pending}>Click</button>
      </div>
    </div>
  )
}

export default App;