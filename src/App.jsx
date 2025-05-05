import { useState } from "react";

function App() {
  const [data, setData] = useState([
    'sam', 'deep', 'tony', 'alex'
  ]);

  const [dataDetails, setDataDetails] = useState([
    { name: 'Srijan', age: '29' },
    { name: 'Akash', age: '34' },
    { name: 'Aman', age: '22' },
    { name: 'Souvik', age: '26' }
  ])

  const handleUser = (name) => {
    data[data.length - 1] = name; // update data
    setData([...data]); // update new array

    console.log(data);
  }

  const handleAge = (age) => {
    console.log(age);
    console.log(dataDetails);
    dataDetails[dataDetails.length - 1].age = age;
    setDataDetails([...dataDetails]);

  }
  return (
    <div>
      <h1>Updating Array in state</h1>
      <input type="text" placeholder="Enter last user name" onChange={(event) => handleUser(event.target.value)} />
      <h2>Users</h2>
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr />
      <input type="text" placeholder="Enter last user age" onChange={(event) => handleAge(event.target.value)} />
      {
        dataDetails.map((item, index) => (
          <h3 key={index}>{item.name},{item.age}</h3>
        ))
      }

    </div>
  )
}

export default App;