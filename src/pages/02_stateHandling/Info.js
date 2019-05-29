import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state || nextProps.info !== this.props.info;
  }

  state = {
    modState: false,
    name: this.props.info.name,
    age: this.props.info.age
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  delete = () => {
    this.props.onDelete(this.props.info.id);
  };

  update = () => {
    this.props.onUpdate({
      id: this.props.info.id,
      name: this.state.name,
      age: this.state.age
    });
    this.setState({
      modState: false
    });
  };

  render() {
    console.log("Info Render !!");

    const infoView = (
      <div className="Info">
        이름 : <span>{this.props.info.name}</span>, 나이 :{" "}
        <span>{this.props.info.age}</span>
      </div>
    );

    const editView = (
      <div className="Info">
        이름 :{" "}
        <input name="name" onChange={this.change} value={this.state.name} />,
        나이 :{" "}
        <input name="age" onChange={this.change} value={this.state.age} />
      </div>
    );

    const modBtn = (
      <button
        onClick={() => {
          this.setState({ modState: true });
        }}
      >
        수정
      </button>
    );

    const applyBtn = <button onClick={this.update}>적용</button>;
    return (
      <div className="Member">
        {!this.state.modState ? infoView : editView}
        <div className="btnCtrl">
          {!this.state.modState ? modBtn : applyBtn}
          <button onClick={this.delete}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Info;
