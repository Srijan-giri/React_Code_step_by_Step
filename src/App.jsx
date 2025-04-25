import { useState } from "react";

function App(){

  const [gender,setGender]=useState('female');
  const [city,setCity] = useState('kolkata');
  return(
    <div>
      <h1>Handle Radio and Dropdown in React</h1>
      <input type="radio" name="gender" id="male" value={"male"} onChange={(event)=>setGender(event.target.value)} checked={gender == 'male'}/>
      <label htmlFor="male">Male</label>
      <br /><br />
      <input type="radio" name="gender" id="female" value={"female"} onChange={(event)=>setGender(event.target.value)} checked={gender == 'female'}/>
      <label htmlFor="female">Female</label>

      <h3>Gender : {gender}</h3>
      <hr />
      <h3>Select City</h3>
      <select defaultValue={"kolkata"} onChange={(event)=>setCity(event.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="noida">Noida</option>
        <option value="kolkata">Kolkata</option>
      </select>
      <p>Selected City : {city}</p>
    </div>
  )
}

export default App;