import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "shared/Router";

class Root extends Component {
  render() {
    const style = {
      fontWeight: 500,
      fontSize: "30px"
    };

    return (
      <BrowserRouter>
        <div>
          <span style={style}>React Practice</span> <Link to="/">home</Link>
        </div>
        <Router />
      </BrowserRouter>
    );
  }
}

export default Root;
