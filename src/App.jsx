import { useRef } from "react";

function App() {

  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const formSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    console.log(name, password);
  }

  const formSubmitRef = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, password);
  }
  return (
    <div>
      <div>
        <h1>Uncontrolled Component</h1>
        <form action="" method="post" onSubmit={formSubmit}>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" placeholder="Enter Name" />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" id="password" placeholder="Enter Password" />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h1>Uncontrolled Component with useRef</h1>
        <form action="" method="post" onSubmit={formSubmitRef}>
          <label htmlFor="name1">Name : </label>
          <input type="text" id="name1" name="name1" placeholder="Enter Name" ref={nameRef} />
          <br />
          <br />
          <label htmlFor="password1">Password : </label>
          <input type="password" name="password1" id="password1" placeholder="Enter Password" ref={passwordRef} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App;