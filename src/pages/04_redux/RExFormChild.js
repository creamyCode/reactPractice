import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "store/modules/book";

class RExFormChild extends Component {
  state = {
    name: "",
    age: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  change = e => {
    this.setState({
      //  Computed property names -> key를 변수로 지정 [] 사용 es2015
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    const { memberCreate } = this.props;
    e.preventDefault();
    if (this.state.age && this.state.name) {
      // this.props.onCreate({ name: this.state.name, age: this.state.age });
      // bookActions.memberCreate({
      //   name: this.state.name,
      //   age: this.state.age
      // });
      memberCreate({
        name: this.state.name,
        age: this.state.age
      });
      this.setState({
        name: "",
        age: ""
      });
    }
  };

  render() {
    console.log(this.props);
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

export default connect(
  null,
  // mapDispatchToProps
  dispatch => ({
    // bookActions: bindActionCreators(bookActions, dispatch)
    memberCreate: member => dispatch(bookActions.memberCreate(member))
  })
)(RExFormChild);
