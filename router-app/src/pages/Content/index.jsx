import React,{ Component, Fragment} from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
import Df from '../Df'
import Lb from '../Lb'
import Ss from '../Ss'
export default class Content extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    
    return <div>
      <Router>
        <Fragment>
          <ul>
            <li><NavLink activeClassName="selected" to={`${this.props.match.url}/lb`}>李白</NavLink></li>
            <li><NavLink activeClassName="selected" to={`${this.props.match.url}/df`}>杜甫</NavLink></li>
            <li><NavLink activeClassName="selected" to={`${this.props.match.url}/ss`}>苏轼</NavLink></li>
          </ul>
          <div className="content">
          <Route path={`${this.props.match.url}/lb`}  component={Lb} />
          <Route path={`${this.props.match.url}/df`} component={Df}/>
          <Route path={`${this.props.match.url}/ss`} component={Ss}/>
          </div>
        </Fragment>
      </Router>
    </div>
  }
  
}