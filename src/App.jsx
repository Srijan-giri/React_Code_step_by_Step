import { useEffect, useState } from "react";

function App(){
  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);

  // call every time

  useEffect(()=>{
    callEveryTime();
  })

  // call only once
  useEffect(()=>{
    callOnlyOnce();
  },[]);


  //call only when the state is updated

  useEffect(()=>{
    counterFunction()
  },[counter]);


  // call only counter and data state are updated
  useEffect(()=>{
    dataFunction();
  },[counter,data]);

  // call only props1 and props2 are updated
  // useEffect(()=>{
  //   //call something
  // },[props1,props2]);

  function callEveryTime(){
    console.log("call every time of callEveryTime method")
  }

  function callOnlyOnce(){
    console.log('calling call only once method');
  }

  function counterFunction(){
    console.log("Counter Function : ",counter);
  }

  function dataFunction(){
    console.log('counter and data state updated');
    console.log("Data Function : ",data);
  }

  
  return(
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
    </div>
  )
}

export default App;