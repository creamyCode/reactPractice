import React, { Component } from "react";
import RExFormChild from "./RExFormChild";
import RInfo from "./RInfo";
import "./Book.css";
import { connect } from "react-redux";
import { Map } from "immutable";

class RExBook extends Component {
  id = 0;
  state = {
    keyword: "",
    members: Map()
  };

  change = e => {
    this.setState({
      //  Computed property names -> key를 변수로 지정 [] 사용 es2015
      [e.target.name]: e.target.value
    });
  };

  createMember = e => {
    const { members } = this.state;
    this.id++;
    this.setState({
      members: members.set(this.id, Map({ ...e, id: this.id }))
      // members: members.concat([{ ...e, id: this.id++ }])
    });
  };

  deleteMember = delId => {
    const { members } = this.state;
    this.setState({
      members: members.delete(delId)
    });
  };

  updateMember = uMember => {
    const { members } = this.state;
    this.setState({
      members: members.set(uMember.id, Map(uMember))
    });
  };

  updateKeyword = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    const members = this.props.members.toJS();
    const memberList = Object.keys(members)
      .map(key => members[key])
      .filter(member => member.name.includes(this.state.keyword));

    const infoList = memberList.map(member => (
      <RInfo key={member.id} id={member.id} />
    ));

    return (
      <div className="Book">
        <RExFormChild onCreate={this.createMember} />
        <div>
          Filter - 이름 :{" "}
          <input
            name="keyword"
            value={this.state.keyword}
            onChange={this.updateKeyword}
          />
        </div>
        <h4 className="title">- 등록 인원 -</h4>
        <div className="InfoList">{infoList}</div>
      </div>
    );
  }
}

export default connect(({ book }) => ({
  // mapStateToProps - redux의 state를 컴포넌트의 props로 받아올 수 있음
  members: book.get("members")
}))(RExBook);
