import { useState } from "react";
import User from "./components/User";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc37",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });

  const [textColor, setTextColor] = useState("black");
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
    });

    setTextColor(textColor);
  };
  let users = [
    {
      name: "Anil Sadhu",
      position: "Software Developer",
    },
    {
      name: "Amit Mandal",
      position: "Software Developer",
    },
    {
      name: "Akash Das",
      position: "Software Developer",
    },
    {
      name: "Amlan Basu",
      position: "Software Developer",
    },
    {
      name:'Amit Shah',
      position: "CEO"
    }
  ];

  const [grid, setGrid] = useState(true);
  return (
    <div>
      <h1>Hello React</h1>
      <button onClick={() => updateTheme("#ccc", "red")}>Change Color</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Color
      </button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>
      <div
        style={{
          display: grid ? "flex" : "block",
          flexWrap: "wrap",
        }}
      >
        {users.map((user, index) => (
          <div key={index}>
            <User user={user} cardStyle={cardStyle} textColor={textColor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
