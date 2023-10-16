import React from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-color-2)",
        color: "var(--txt-color-1)",
      }}
    >
      <div className={"container"}>
        <Home />
        <div className={"blur1"} />
        <div className={"blur2"} />
      </div>
    </div>
  );
}

export default App;
