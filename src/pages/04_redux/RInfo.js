import React, { Component } from "react";
import "./Info.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "store/modules/book";

class RInfo extends Component {
  id = this.props.id;
  bookActions = this.props.bookActions;

  shouldComponentUpdate(nextProps, nextState) {
    const cInfo = this.props.getInfo(this.id);
    const nInfo = nextProps.getInfo(this.id);
    return cInfo !== nInfo;
  }

  changeMode = () => {
    this.bookActions.changeInfoMod(this.id);
  };

  change = e => {
    this.bookActions.changeInput(this.id, e.target.name, e.target.value);
  };

  delete = () => {
    this.bookActions.memberDelete(this.id);
  };

  update = () => {
    const input = this.props.getInput(this.id);
    this.bookActions.memberUpdate(this.id, input.toJS());
  };

  render() {
    console.log("Info Render !!");

    const memberInfo = this.props.getMemberInfo(this.id);
    const input = this.props.getInput(this.id);

    const infoView = (
      <div className="Info">
        이름 : <span>{memberInfo.get("name")}</span>, 나이 :{" "}
        <span>{memberInfo.get("age")}</span>
      </div>
    );

    const editView = (
      <div className="Info">
        이름 :{" "}
        <input name="name" onChange={this.change} value={input.get("name")} />,
        나이 :{" "}
        <input name="age" onChange={this.change} value={input.get("age")} />
      </div>
    );

    const modBtn = <button onClick={this.changeMode}>수정</button>;

    const applyBtn = <button onClick={this.update}>적용</button>;
    return (
      <div className="Member">
        {!this.props.getEditMod(this.id) ? infoView : editView}
        <div className="btnCtrl">
          {!this.props.getEditMod(this.id) ? modBtn : applyBtn}
          <button onClick={this.delete}>삭제</button>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ book }) => ({
    getInfo: id => book.getIn(["infos", id]),
    getMemberInfo: id => book.getIn(["infos", id, "memberInfo"]),
    getInput: id => book.getIn(["infos", id, "input"]),
    getEditMod: id => book.getIn(["infos", id, "editMod"])
  }),
  dispatch => ({
    bookActions: bindActionCreators(bookActions, dispatch)
  })
)(RInfo);
