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

  // 화면에 나타나기 직전 호출
  // componentWillMount() {
  //   console.log("componentWillMount (deprecated)");
  // }
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount (deprecated 2)");
  // }

  // 화면에 표출시
  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log("componentDidMount");
  }

  //새로운 props를 받게 될 경우
  // componentWillReceiveProps(nextProps) {
  //   // this.props 는 아직 바뀌지 않은 상태
  //   console.log("componentWillReceiveProps", nextProps);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
    return null;
  }

  // dom 변화 일어나기 직전의 상태 가져옴, return 값은 componentDidUpddate에서 3번째 param으로 받을 수 있음
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { test: "test" };
  }

  // render() 호출 후 발생,
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  increase = e => {
    console.log(e);
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
    if (this.state.error) return <h1>에러발생!</h1>;
    return (
      <div>
        <h4>Counter</h4>
        {this.state.number === 4 && <Problematic />}
        <div>값 : {this.state.number}</div>
        <button onClick={this.increase}>증가 +</button>
        <button onClick={this.decrease}>감소 -</button>
        <button onClick={this.reset}>reset</button>
        <h4>List state</h4>
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

const Problematic = () => {
  throw new Error("버그가 나타났다!");
};

export default Counter;
