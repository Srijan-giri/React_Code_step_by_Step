import { useEffect } from "react";

function Counter({counter,data}){

    // mounting
    useEffect(()=>{
        console.log("Mounting Phase Only........");
    },[]);

    // updating
    useEffect(()=>{
        console.log('Updating Phase Only.........');
    },[counter]);


    // Deleting or unmounting
    useEffect(()=>{
        return ()=>{
            console.log('Deleting or Unmounting Phase Only..........');
        }
    },[]);

    return(
        <div>
            <h1>Counter : {counter}</h1>
            <h1>Data : {data}</h1>
        </div>
    );
}

export default Counter;