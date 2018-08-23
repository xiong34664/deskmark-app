import React, { Component } from 'react'
import './style.css'
export default class CreateBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item :[
        {id: 1,name: 'zs'},
        {id: 2,name: 'ls'},
        {id: 3,name: 'ww'},
        {id: 4,name: 'zl'}
      ]
    }
    this.subtract = this.subtract.bind(this)
    this.add = this.add.bind(this)
  }
  subtract() {
    this.setState({
      item: this.state.item.slice(0,-1)
    })
  }
  add() {
    const length = this.state.item.length
    this.state.item.push({id:this.state.item[length-1].id+1,name:'zs'})
    this.setState({
      item: this.state.item
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.add}>+</button>
        <ul>
          {this.state.item.map(item => <li data-id={item.id} key={item.id}>id:{item.id}  name:{item.name}</li>)}
        </ul>
      </div>
    )
  }
  
}