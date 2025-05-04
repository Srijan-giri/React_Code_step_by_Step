import { useFormStatus } from "react-dom";

function App() {

  const handleFormInput = async () => {
    await new Promise(res => (
      setTimeout(res, 5000)
    ));

    console.log('submitted');
  }

  const CustomForm = () => {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" name="name" placeholder="Enter your name" />
        <br /><br />
        <input type="password" name="password" placeholder="Enter your password" autoComplete="off" />
        <br /><br />
        <button disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    )
  }
  return (
    <div>
      <h1>useFormStatus in React</h1>

      <form action={handleFormInput}>
        <CustomForm />
      </form>
    </div>
  )
}

export default App;