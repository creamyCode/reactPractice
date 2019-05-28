import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // reset에 대한 this 재바인딩
    this.reset = this.reset.bind(this);
  }

  state = {
    number: 0,
    obj: {
      a: 1,
      b: 2,
      c: 3
    }
  };

  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };

  decrease = () => {
    // this.state.number--;  // 바로접근시 메모리값은 변하지만 화면에 적용 안됨
    // -------------------
    const { number } = this.state; // 비구조 할당
    this.setState({ number: number - 1 });
    // this.setState({ number: this.state.number - 1 });
  };

  // 아래와 같은 형태시 클릭이벤트에서 this 연결이 끊김, 생성자에서 this 바인딩 처리 필요
  reset() {
    this.setState({ number: 0 });
  }

  change = () => {
    // this.setState({
    //   obj: {
    //     a: 5,
    //     b: 6
    //   }
    // });
    this.setState({
      obj: {
        ...this.state.obj, // 전개연산자 사용
        a: 5,
        b: 6
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>값 : {this.state.number}</div>
        <button onClick={this.increase}>증가 +</button>
        <button onClick={this.decrease}>감소 -</button>
        <button onClick={this.reset}>reset</button>
        <hr />
        <h2>List state</h2>
        <button onClick={this.change}>change 5, 4</button>
        <button onClick={this.change}>change 1, 2, 3</button>
        <br />
        {Object.keys(this.state.obj).map((key, i) => (
          <span key={i}>{this.state.obj[key]}</span>
        ))}
      </div>
    );
  }
}

export default Counter;
