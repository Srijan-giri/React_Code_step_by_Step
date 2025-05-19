import { useEffect, useState } from "react";
import './assets/css/style.css';

function App() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse.users);
    setUserData(jsonResponse.users);
  }
  return (
    <div>
      <h1>Fetch and Display API Data in React</h1>


      <ul className="list-design" style={{ fontWeight: "bolder" }}>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {
        userData && userData.map((user, index) => (
          <ul key={index} className="list-design">
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))
      }

    </div>
  )
}

export default App;