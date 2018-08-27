import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom'
import Df from './pages/Df'
import Lb from './pages/Lb'
import Ss from './pages/Ss'
import Content from './pages/Content'
import './App.css'

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <h1>Simple SAP</h1>
          <ul>
            <li><NavLink activeClassName="selected" to="/lb">李白</NavLink></li>
            <li><NavLink activeClassName="selected" to="/df">杜甫</NavLink></li>
            <li><NavLink activeClassName="selected" to="/ss">苏轼</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" render={() => <Redirect to="/lb" />}></Route>
          <Route path="/lb"  component={Lb} />
          <Route path="/df" component={Df}/>
          <Route path="/ss" component={Ss}/>
          <Route path="/:type" component={Content}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
