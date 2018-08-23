import React from 'react';
import { ref } from 'react.eval';

/*
如果安装了 babel-plugin-transform-decorators-legacy
https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy#readme
可以这样↓
*/
//@ref 
class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content : 'nothing'
    };
    /* 构造方法初始化实例
    如果使用了ES7 decorators，就不用在constructor初始化
    装饰器和constructor初始化任选一种，如果同时使用，则会抛出错误
      */
    ref(this);
  }
  // 提供给外界调用的方法
  changeContent = (str) => {
    console.log("changing"+str);
    this.setState({
      content:str
    });
  }
  render() {
    return <p>
      Component {this.id}:
      {this.state.content}
    </p>;
  }
}
export default B;