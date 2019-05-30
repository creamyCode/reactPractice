import React, { Component } from "react";
import "./Info.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "store/modules/book";

class RInfo extends Component {
  id = this.props.id;
  bookActions = this.props.bookActions;

  state = {
    modState: false,
    name: this.props.getMember(this.id).name,
    age: this.props.getMember(this.id).age
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state;
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  delete = () => {
    // this.props.onDelete(this.props.info.id);
    this.bookActions.memberDelete(this.id);
  };

  update = () => {
    // this.props.onUpdate({
    //   id: this.props.info.id,
    //   name: this.state.name,
    //   age: this.state.age
    // });
    this.bookActions.memberUpdate({
      id: this.id,
      name: this.state.name,
      age: this.state.age
    });
    this.setState({
      modState: false
    });
  };

  render() {
    console.log("Info Render !!");
    // const member = this.props.getMember(this.id);

    const infoView = (
      <div className="Info">
        이름 : <span>{this.state.name}</span>, 나이 :{" "}
        <span>{this.state.age}</span>
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

export default connect(
  ({ book }) => ({
    getMember: id => book.getIn(["members", id])
  }),
  dispatch => ({
    bookActions: bindActionCreators(bookActions, dispatch)
  })
)(RInfo);
