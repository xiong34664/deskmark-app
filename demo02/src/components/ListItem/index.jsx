import React, {Component} from 'react'
import './style.css'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()

    this.state = {
      initcount: 1
    }

    this.textInput = null

    this.setTextInputRef = element => {
      this.textInput = element
    }

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }

    this.subtract = this.subtract.bind(this)
    this.add = this.add.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount')
    console.log(this)
  }
  componentDidMount() {
    this.focusTextInput()
    console.log('componentDidMount')
    console.log(this)
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
    console.log(this)
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
    console.log(this.state)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log(this.state)
  }
  subtract() {
    const initcount = --this.state.initcount
    this.setState({
      initcount
    })
  }
  add() {
    //获取 inputElement 插入组件的  value 值
    console.log(this.inputElement.current.value)

    const initcount = ++this.state.initcount
    this.setState({
      initcount
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.subtract}>-</button>
        <input
          type="text"
          value={this.state.initcount}
          ref={this.setTextInputRef}
        />
        <button onClick={this.add}>+</button>
        {/* 通过this.inputElement = React.createRef()  获取子组件 ref */}
        <CustomTextInput inputRef={this.inputElement} />
      </div>
    )
  }
}
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
}
