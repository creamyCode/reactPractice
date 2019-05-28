import React from "react";
import "./App.css";

import { Fragment } from "react";
import LayoutHeader from "./layout/LayoutHeader.js";
import Counter from "./01_counter/counter";

function App() {
  const val = "value ~!";
  const v1 = 1;
  const v2 = 2;

  const sty1 = {
    color: "red"
  };

  return (
    <Fragment>
      <LayoutHeader version="0.1v" />
      <div className="App">
        <header className="App-header">
          <div>test {val}</div>
          <div style={sty1}>1+2 ? {v1 + v2}</div>
        </header>
      </div>
      <Counter />
    </Fragment>
  );
}

export default App;
