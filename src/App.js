import React from "react";
import Weather from "./Weather"
import './App.css';
import Main from "./video";

export default function App() {
  return (
    <div>
      <Main />
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
      <footer>
        This project is created by Helene Lipp and is {" "}
        <a href="https://github.com/HeleneLi" target="_blank" rel="noreferrer"  >
      open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
    </div>
  );
}
