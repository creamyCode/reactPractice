import React, { Component } from "react";
import ExFormChild from "./ExFormChild";
import Info from "./Info";
import "./Book.css";
import { Map } from "immutable";

class ExBook extends Component {
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
    const members = this.state.members.toJS();
    const memberList = Object.keys(members)
      .map(key => members[key])
      .filter(member => member.name.includes(this.state.keyword));

    const infoList = memberList.map(member => (
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

// class ExBook extends Component {
//   id = 0;
//   state = {
//     keyword: "",
//     members: []
//   };

//   change = e => {
//     this.setState({
//       //  Computed property names -> key를 변수로 지정 [] 사용 es2015
//       [e.target.name]: e.target.value
//     });
//   };

//   createMember = e => {
//     const { members } = this.state;
//     this.setState({
//       members: members.concat([{ ...e, id: this.id++ }])
//     });
//   };

//   deleteMember = delId => {
//     const { members } = this.state;
//     this.setState({
//       members: members.filter(member => member.id !== delId)
//     });
//   };

//   updateMember = uMember => {
//     const { members } = this.state;
//     this.setState({
//       members: members.map(member =>
//         member.id === uMember.id ? uMember : member
//       )
//     });
//   };

//   updateKeyword = e => {
//     this.setState({
//       keyword: e.target.value
//     });
//   };

//   render() {
//     const infoList = this.state.members
//       .filter(member =>
//         this.state.keyword ? member.name.includes(this.state.keyword) : true
//       )
//       .map(member => (
//         <Info
//           key={member.id}
//           info={member}
//           onDelete={this.deleteMember}
//           onUpdate={this.updateMember}
//         />
//       ));

//     return (
//       <div className="Book">
//         <ExFormChild onCreate={this.createMember} />
//         <div>
//           Filter - 이름 :{" "}
//           <input
//             name="keyword"
//             value={this.state.keyword}
//             onChange={this.updateKeyword}
//           />
//         </div>
//         <h4 className="title">- 등록 인원 -</h4>
//         <div className="InfoList">{infoList}</div>
//       </div>
//     );
//   }
// }

export default ExBook;
