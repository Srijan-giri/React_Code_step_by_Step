import { useEffect } from "react";

function Counter({counter,data}){

    function getCounter(){
        console.log('handle counter called');
    }

    const handleData = ()=>{
        console.log('handle data called');
    }

    // for counter props update the getCounter function is called only one time 
    useEffect(()=>{
        getCounter();
    },[]);


    // for data props update the handData function is called every time 
    useEffect(()=>{
        handleData();
    },[data]);

     return(
        <div>
            <h1>Counter : {counter}</h1>
            <h1>Data : {data}</h1>
        </div>
     )
}

export default Counter;