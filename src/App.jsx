import AddUser from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";
import { useState } from "react";
function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  const handleUsers = () => {
    setUsers([...users, user]);
  }

  console.log(users);

  return (
    <div>
      {/* //! It is used to transfer data between components with the help of state */}
      <h1>Lifting State Up in React</h1>
      {/* 
         --Lifting state up
          1) here App.jsx is a parent component
          2) AddUser.jsx and AddUser.jsx and DisplayUsers.jsx are child components
          3) Via App.jsx , we can transfer data from AddUser.jsx to DisplayUsers.jsx with the help of state
       */}
      <AddUser setUser={setUser} handleUsers={handleUsers} />
      <hr />
      <DisplayUsers users={users} />

    </div>
  )
}

export default App;