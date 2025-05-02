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
      <h1>Loopp using in JSX</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {/* key is basically used to identify the each row in the table */}
          {
              userArray && 
              userArray.map((user)=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;