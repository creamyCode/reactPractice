import React, { Component } from "react";

class LayoutHeader extends Component {
  // react 기본 프로퍼티
  static defaultProps = {
    name: "React Practice"
  };

  render() {
    return (
      <div>
        {this.props.name} <b>{this.props.version}</b> - {this.props.author}
      </div>
    );
  }
}

LayoutHeader.defaultProps = {
  author: "creamyCode",
  name: "React Practice"
};

export default LayoutHeader;
