import React from "react";
import "./App.css";

type Text = string;

function App() {
  const text: Text = "click";
  return (
    <div className="App">
      <button>{text}</button>
    </div>
  );
}

export default App;
