import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as pages from "pages";

class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={pages.Home} />
        <Route path="/01_component" component={pages.ExCounter} />
        <Route path="/02_state" component={pages.ExBook} />
        <Route path="/03_routing" component={pages.ExRouter} />
        <Route path="/04_redux" component={pages.RExBook} />
      </div>
    );
  }
}

export default Router;
