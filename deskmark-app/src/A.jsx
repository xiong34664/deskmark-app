import React from 'react';
import { ref } from 'react.eval';

class A extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>
      <button onClick={() => {
        /* 在事件方法中 使用 id.方法名 参数1、参数2...方式调用B组件提供的方法
        */
        ref('b.changeContent', Math.random());
      }}>changeOtherComponent</button>
    </p>;
  }
}
export default A;