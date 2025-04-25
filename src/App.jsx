import User from "./components/User";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <h1>Props pass to JSX</h1>
      <User name={"Anil Sadhu"} />
      <User />
      <User name="Srijan Giri" />

      <Wrapper color={"yellow"} name="Happy">
        <h1>Hello Anil</h1>
      </Wrapper>

      <Wrapper color={"blue"}>
        <h1>Hello Subham</h1>
      </Wrapper>

      <Wrapper>
        <h1>Hello Admin</h1>
        <h2 style={{ color: 'red', }}>Please Login</h2>
      </Wrapper>
    </div>
  )

}

export default App;