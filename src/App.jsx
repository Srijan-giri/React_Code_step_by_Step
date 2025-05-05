
// let counter = 0;
// let count = 0;


function App() {
  return (
    <div>
      <h1>Keeping Component Pure</h1>
      <Counter counter={1} />
      <Counter counter={3} />
      <Counter counter={5} />
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </div>
  )
}




//! impure component
// function Counter() {
//   counter = counter + 1;
//   return (
//     <div>
//       <h2>Counter {counter}</h2>
//     </div>
//   );
// }


//* pure component
function Counter({ counter }) {
  // counter = counter + 1;
  return (
    <div>
      <h2>Counter {counter}</h2>
    </div>
  );
}


// impure to pure component

function Cup({ guest }) {
  // count = count + guest;
  return (
    <div>
      <h2>We have {guest} guest and we have to make {guest} cups of tea.</h2>
    </div>
  )
}

export default App;