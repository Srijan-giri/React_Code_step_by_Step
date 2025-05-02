
import { useState } from "react";
function Counter(){
    const [count,setCount] = useState(0);
    const [message,updateMessage] = useState('This is from Counter Component');
    return(
        <div>
            <h2>Counter App</h2>
            <h3>Counter: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <p>Message : {message}</p>
            <button onClick={()=>updateMessage('Message is Changed')}>Message Button</button>
        </div>
    )    

}

export default Counter;