import React from "react";
import "./App.css";

import { Fragment } from "react";
import LayoutHeader from "./layout/LayoutHeader.js";
import ExCounter from "./01_component/ExCounter";
import ExBook from "./02_stateHandling/ExBook";

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
      <h2>Basic</h2>
      <div className="App">
        <header className="App-header">
          <div>test {val}</div>
          <div style={sty1}>1+2 ? {v1 + v2}</div>
        </header>
      </div>
      <hr />
      <h2>01.Component</h2>
      <ExCounter />
      <hr />
      <h2>02.stateHandling</h2>
      <ExBook />
    </Fragment>
  );
}

export default App;
