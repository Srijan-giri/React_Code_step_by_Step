import { useId } from "react";

function App() {

  return (
    <div>
      <h1>useId hook in React</h1>
      <UserForm />
      <hr />
      <UserForm />
    </div>
  )
}

function UserForm() {

  //* useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

  // const name = useId();
  // const password = useId();
  // const skills = useId();
  // const terms = useId();

  const user = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={user + "name"}>Enter Name : </label>
        <input type="text" placeholder="Enter Name" id={user + "name"} />
        <br /><br />
        <label htmlFor={user + "password"}>Enter Password : </label>
        <input type="password" placeholder="Enter Password" id={user + "password"} />
        <br /><br />
        <label htmlFor={user + "skills"}>Enter Skills : </label>
        <input type="text" placeholder="Enter Name" id={user + "skills"} />
        <br /><br />
        <input type="checkbox" name="terms" id={user + "terms"} />
        <label htmlFor={user + "terms"}>Terms and Condition</label>

      </form>
    </div>
  )
}

export default App;