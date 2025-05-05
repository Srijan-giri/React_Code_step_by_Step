import { useActionState } from "react";

function App() {

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    await new Promise((res) => setTimeout(res, 2000));
    if (name && password) {
      return { message: 'Data Submitted', name, password }
    }
    else {
      return { error: 'Failed to submit.Enter proper data' }
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);
  return (
    <div>
      <h1>useActionState Hook in React</h1>
      <form action={action}>
        <input type="text" name="name" placeholder="Enter your name" defaultValue={data?.name} />
        <br /><br />
        <input type="password" name="password" placeholder="Enter your password" defaultValue={data?.password} />
        <br /><br />
        <button disabled={pending}>
          {
            pending ? 'Submitting...' : 'Submit'
          }
        </button>
        <br />
        {
          data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
        }
        {
          data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
        }
      </form>

      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>

    </div>
  )
}

export default App;