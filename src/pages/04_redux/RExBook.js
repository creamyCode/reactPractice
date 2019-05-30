import React, { Component } from "react";
import RExFormChild from "./RExFormChild";
import RInfo from "./RInfo";
import "./Book.css";
import { connect } from "react-redux";
import * as bookActions from "store/modules/book";

class RExBook extends Component {
  change = e => {
    this.props.changeKeyword(e.target.value);
  };

  render() {
    const infos = this.props.infos.toJS();
    const memberList = Object.keys(infos)
      .map(id => infos[id]["memberInfo"])
      .filter(member => {
        return member.name.includes(this.props.keyword);
      });

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
            value={this.props.keyword}
            onChange={this.change}
          />
        </div>
        <h4 className="title">- 등록 인원 -</h4>
        <div className="InfoList">{infoList}</div>
      </div>
    );
  }
}

export default connect(
  ({ book }) => ({
    // mapStateToProps - redux의 state를 컴포넌트의 props로 받아올 수 있음
    infos: book.get("infos"),
    keyword: book.get("keyword")
  }),
  dispatch => ({
    changeKeyword: keyword => dispatch(bookActions.changeKeyword(keyword))
  })
)(RExBook);
