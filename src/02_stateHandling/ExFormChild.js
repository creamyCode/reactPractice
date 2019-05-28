import React, { Component } from "react";

class ExFormChild extends Component {
  state = {
    name: "",
    age: ""
  };

  change = e => {
    this.setState({
      //  Computed property names -> key를 변수로 지정 [] 사용 es2015
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    if (this.state.age && this.state.name) {
      this.props.onCreate({ name: this.state.name, age: this.state.age });
      this.setState({
        name: "",
        age: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          name :{" "}
          <input name="name" value={this.state.name} onChange={this.change} />{" "}
          age :{" "}
          <input name="age" value={this.state.age} onChange={this.change} />{" "}
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default ExFormChild;
