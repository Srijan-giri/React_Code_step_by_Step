import { Fragment } from "react";

function App() {
  return (
    // ! to remove extra div element -> we have to use Fragment
    <Fragment>
      <Data />
      <Data />
      <Data />

      <hr />


      <Show />
      <Show />
    </Fragment>
  )
}

function Data() {
  return (
    <>
      <h1>Fragment in React JS</h1>
      <h1>Fragment in React JS</h1>
    </>
  )
}


function Show() {
  return (

    //! remove div and use Fragment
    <>
      <span>Hello <b>User</b></span>
    </>
  )
}

export default App;