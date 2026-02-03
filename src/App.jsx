import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white"); // default background color

  const colors = ["red", "blue", "green", "yellow", "orange", "pink", "purple"]; // buttons

  return (
    <div className="App" style={{ backgroundColor: color, height: "100vh" }}>
      <h1>Color Changer App</h1>
      {colors.map((c, index) => (
        <button
          key={index}
          onClick={() => setColor(c)}
          style={{ backgroundColor: c }}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default App;
