import User from "./components/User";

function App() {


  function displayUser(name) {
    alert(name);
  }

  const getUser = () => {
    alert('Get User function called');
  }
  return (
    <div>
      <h1>Pass React Function From Parent To Child</h1>
      <User displayUser={displayUser} name={"Anil"} onClick={getUser} />
      <User displayUser={displayUser} name={"Sam"} onClick={getUser} />
      <User displayUser={displayUser} name={"Akash"} onClick={getUser} />
      <User displayUser={displayUser} name={"Param"} onClick={getUser} />
      <User displayUser={displayUser} name={"Asif"} onClick={getUser} />
      <User displayUser={displayUser} name={"Makram"} onClick={getUser} />
    </div>
  )
}

export default App;