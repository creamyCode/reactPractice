import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    const activeStyle = {
      color: "green",
      fontSize: "2rem"
    };

    return (
      <div>
        <ul>
          <li>
            <NavLink
              exact
              to={`${this.props.match.url}/about`}
              activeStyle={activeStyle}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/about/foo`}
              activeStyle={activeStyle}
            >
              About Foo
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/posts`}
              activeStyle={activeStyle}
            >
              Posts
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
}

export default Menu;
