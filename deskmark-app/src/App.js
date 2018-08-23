import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Deskmark from './components/Deskmark';
// import B from './B'
// import A from './A'

// class EditPanel extends Component{ //子组件
//   constructor(props){
//      super(props);
//      this.state=this.props.item;//通过props初始化子组件的state
//      this.handleEditFinish=this.handleEditFinish.bind(this);
//   }
//   handleEditFinish(){   
//     this.state.count[this.props.num]++
//     var newState=this.state 
//     this.props.onChange(newState);//回调函数传递参数给父组件
//   }
//   render(){
//      return(
//          <div >
//            <button onClick={this.handleEditFinish}>+</button> <span>{this.state.count[this.props.num]}</span>
//          </div>
//        )
//   }
// }

// class App extends Component{ //父组件
//   constructor(props){
//      super(props);
//      this.state={
//           count: [1,2,3],
//           num:0
//      }
//      this.handleChildChange=this.handleChildChange.bind(this); //监听子组件变化
//   }
//   componentDidMount() {
//     let num = 0
//     this.state.count.forEach(item=> {
//       num += item
//     })
//     this.setState({
//       num
//     })
//   }
//   handleChildChange(newState){ //处理子函数传回来的state,改变自身的state
//     this.setState(newState);
//     let num = 0
//     this.state.count.forEach(item=> {
//       num += item
//     })
//     this.setState({
//       num
//     })
//   }
//   render() {
//       return (
//         <div>
//           <EditPanel item={this.state} num={0} onChange={this.handleChildChange}/>
//           <EditPanel item={this.state} num={1} onChange={this.handleChildChange}/>
//           <EditPanel item={this.state} num={2} onChange={this.handleChildChange}/>
//           <p>{this.state.num}</p>
//         </div>
//       )
//   }
// }

class App extends Component {
 
  render() {
    return (
      <div>
        <Deskmark />
        {/* <A />
        <B id='b'/> */}
      </div>
    );
  }
}

export default App
