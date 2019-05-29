import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import * as pages from "pages";
import Menu from "./Menu";

class ExRouter extends Component {
  render() {
    return (
      <div>
        <Menu match={this.props.match} />
        <Switch>
          <Route
            path={`${this.props.match.url}/about/:name`}
            component={pages.About}
          />
          <Route
            path={`${this.props.match.url}/about`}
            component={pages.About}
          />
        </Switch>
        <Route path={`${this.props.match.url}/posts`} component={pages.Posts} />
      </div>
    );
  }
}

export default ExRouter;
