import React, { Component } from "react";
import ExFormChild from "./ExFormChild";
import Info from "./Info";
import "./Book.css";

class ExBook extends Component {
  id = 0;
  state = {
    keyword: "",
    members: []
  };

  change = e => {
    this.setState({
      //  Computed property names -> key를 변수로 지정 [] 사용 es2015
      [e.target.name]: e.target.value
    });
  };

  createMember = e => {
    const { members } = this.state;
    this.setState({
      members: members.concat([{ ...e, id: this.id++ }])
    });
  };

  deleteMember = delId => {
    const { members } = this.state;
    this.setState({
      members: members.filter(member => member.id !== delId)
    });
  };

  updateMember = uMember => {
    const { members } = this.state;
    this.setState({
      members: members.map(member =>
        member.id === uMember.id ? uMember : member
      )
    });
  };

  updateKeyword = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    const infoList = this.state.members
      .filter(member =>
        this.state.keyword ? member.name.includes(this.state.keyword) : true
      )
      .map(member => (
        <Info
          key={member.id}
          info={member}
          onDelete={this.deleteMember}
          onUpdate={this.updateMember}
        />
      ));

    return (
      <div className="Book">
        <ExFormChild onCreate={this.createMember} />
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

export default ExBook;
