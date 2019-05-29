import React, { Component } from "react";
import queryString from "query-string";

class About extends Component {
  query = this.props.location.search
    ? queryString.parse(this.props.location.search)
    : null;

  render() {
    console.log(this.props);
    console.log(this.name);
    return (
      <div>
        <h2>About {this.props.match.params.name}</h2>
        <h3>query Info</h3>
        {this.query
          ? Object.keys(this.query).map(key => (
              <div key={key}>
                key : {key}, value : {this.query[key]}
              </div>
            ))
          : "not used query"}
      </div>
    );
  }
}

// const About = ({match}) => {
//     return (
//         <div>
//             <h2>About {match.params.name}</h2>
//         </div>
//     );
// };
export default About;
