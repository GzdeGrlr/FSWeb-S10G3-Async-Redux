import React from "react";
import "../App.css";
import JokeList from "./JokesList";

function App() {
  return (
    <>
      <div className="header">
        <h1>Give it a laugh!</h1>
      </div>
      <div className="App">
        <p className="paragraph">
          <i>A good laugh heals a lot of hurts.</i>
          <p>— Madeleine L’Engle</p>
        </p>
        <JokeList />
      </div>
    </>
  );
}

export default App;
