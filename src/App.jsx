import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUser = () => {
    setUsers([...users, user]);
  }

  console.log(user, users);

  //! Derived State --> contains state or props calculation value into single variable
  const total = users.length; //* Derieved State
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)].length; // spread operator is basically used to convert the set into array
  console.log([...new Set(users)]);
  return (
    <div>
      <h1>Derived State in React</h1>
      <h2>Total Users : {total}</h2>
      <h2>Last User: {lastUser}</h2>
      <h2>Unique Total Users : {uniqueUsers}</h2>
      <input type="text" placeholder="add user" onChange={(event) => setUser(event.target.value)} />
      <button onClick={handleAddUser}>Add</button>
      {
        users.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))
      }
    </div>
  )
}

export default App;     