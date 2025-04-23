// import {Profile,Settings,userKey} from './UserComponent.jsx';
// import Login from './UserComponent.jsx';
// import Todo from './ToDo.jsx';


/*
* Topic : Import and Export React Component
*
function App(){
  return(
    <div>
        <h1>Importing and Exporting Component</h1>
        <Login />
        <Profile/>
        <Settings/>
        <h1>User Key : {userKey}</h1>
    </div>
   
  );
}
  
*/
/*

Topic : JSX

//* JSX => JavaScript XML or JavaScript Syntax Extension
//* There are no declaration in the Documentation that which is the full form of JSX
//* JSX allows to write HTML code inside Javascript

function App(){
  const username = 'Anil Sadhu';
  let x=20;
  let y=30;
  return(
    <div>
         <h2>Name: {username}</h2>``
         <h2>{10+20+30}</h2>
         <h2>{x*y}</h2>
         <button onClick={()=>alert('Clicked')}>Click</button>
    </div>
  );
}

*/

/*

Topic : Javascript Exercise


function App(){
    return(
      <div>
        <Todo/>
      </div>
    )
}

*/

/*
   
Topic : JSX with Curly Braces

function App(){

  //*1. Variable
  const name='peter';
  // const name=undefined;
  let x=10;
  let y=20;

  //*2.Function
  function fruit(){
    return "Apple";
  }

  function sum(a,b){
    return a+b;
  }

  //* 3. OPerations

  function operation(a,b,op=""){
    if(op=='+'){
      return a+b;
    }
    else if(op=='-'){
      return a-b;
    }
    else{
      return a*b;
    }
  }


  //*5. Object
  const userObj = {
    name:'Anil Sadhu',
    age:39
  }

  //*6. Array
  const userArray = ['peter','bruce','sam']; 

  //*7. Image Path

  const path = "https://picsum.photos/536/354";



  return(
    <div>
      <h1>JSX with Curly Braces</h1>
      <h1>{name?name:'User Not Found'}</h1>
      <h1>{x+y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(10,20)}</h1>
      <h1>{operation(120,20,"+")}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[0]}</h1>
      <h1>{userArray[1]}</h1>
      <input type="text" value={name} id={name} />
      <br />
      <img src={path} alt="image" />
    </div>
  )
}

*/

function apple(){
  alert('Apple Outside');
}


function App(){

  function callFun(){
    alert('Function Called');
  }

  function fruit(name){
    alert(name);
  }

  // function apple(){
  //   alert('Apple Inside');
  // }
   return(
     <div>
         <h1>Event and Function Call</h1>

         {/* //* Inside onClick we have to pass the function defination or name
         //* instead of function call */}
         <button onClick={callFun}>Click Me</button><br /><br />
         <button onClick={()=>fruit('Apple')}>Apple</button>
         <button onClick={()=>fruit('Banana')}>Banana</button>

         {/* //* Interview Tests */}
         {/* //* If apple function presents inside the App Component then it calls
         //* other wise if its not present then it will call the outside apple function  */}
         <button onClick={apple}>Apple</button>
     </div>
   )
}


export default App;

