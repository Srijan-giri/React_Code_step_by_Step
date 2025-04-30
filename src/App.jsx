import styled from 'styled-components';

function App(){

  // const Heading = styled.h1`
  //   color:red;
  //   border:2px solid green;
  //   border-radius:10px;
  //   padding:20px;
  //   margin:10px;
  // `;

  const Heading = styled.h1({
        color:'red',
        border:'2px solid green',
        borderRadius:'10px',
        padding:'20px',
        margin:'10px'
  });

  const Button = styled.button({
    color: 'red',
    width: '100px',
    height: '38px',
    padding: '5px',
    margin: '10px'
  });

  const P = styled.p({
    color:'red',
    fontWeight:'bold'
  })
  return(
    <div>
      <h1>Styled Component With React JS</h1>
      <Heading>Hello Heading</Heading>
      <Heading>Hello Heading1</Heading>
      <Heading>Hello Heading2</Heading>
      <Heading>Hello Heading3</Heading>
      <Heading>Hello Heading4</Heading>
      <Heading>Hello Heading5</Heading>
      <Button>Login</Button>
      <P>Hello Mic Testing</P>
    </div>
  )
}

export default App;