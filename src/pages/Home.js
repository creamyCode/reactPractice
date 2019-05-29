import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    const activeStyle = {
      color: "green",
      fontSize: "2rem"
    };
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/01_component" activeStyle={activeStyle}>
              01_component
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/02_state" activeStyle={activeStyle}>
              02_state
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/03_routing" activeStyle={activeStyle}>
              03_routing
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
