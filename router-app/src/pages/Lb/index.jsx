import React,{Component} from 'react'
import './style.css'
export default class Lb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
  }
  onChange = (e) => {
    const length = e.target.value.length;
    if (length >= 4) {
      this.setState(() => ({ disabled: false }))
    } else if (!this.state.disabled) {
      this.setState(() => ({ disabled: true }))
    }
  }
  
  render() {
    const label = this.state.disabled ? 'Disabled' : 'Submit';
  return <div>
    <h2>《望庐山瀑布》</h2>
    <p>日照香炉生紫烟，</p>
    <p>遥看瀑布挂前川。</p>
    <p>飞流直下三千尺，</p>
    <p>疑是银河落九天。</p>
    <button className={!this.state.disabled && 'buttonEnabled'} disabled={this.state.disabled}>{label}</button>
    <input onChange={this.onChange}/>
  </div>
  }
}