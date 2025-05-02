import User from "./components/User";

function App(){
  let userArray=[
    {
      name:'Srijan',
      email:'abc@gmail.com',
      age:21,
      id:1
    },
    {
      name:'Ajay',
      email:'ajay@gmail.com',
      age:22,
      id:2
   },
   {
      name:'Sam',
      email:'sam@gmail.com',
      age:34,
      id:3
   },
   {
      name:'Sanjoy',
      email:'sanjoy@gmail.com',
      age:41,
      id:4
   }];
  return(
    <div>
      <h1>Reuse Component using loop in React</h1>
      {
        userArray &&
        userArray.map((user)=>(
          <div key={user.id}>
             <User data={user}/>
          </div>

        ))
      }
    </div>
  )
}

export default App;