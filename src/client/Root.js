import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "shared/Router";
import { Provider } from "react-redux";
import store from "store";

class Root extends Component {
  render() {
    const style = {
      fontWeight: 500,
      fontSize: "30px"
    };

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <span style={style}>React Practice</span> <Link to="/">home</Link>
          </div>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
