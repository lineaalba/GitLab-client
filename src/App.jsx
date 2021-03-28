import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IsLoggedIn from './components/IsLoggedIn'
import './App.css'
import RealTimeIssues from './components/RealTimeIssues'
import Authentication from './components/Authentication'
import Dashboard from './components/Dashboard'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <IsLoggedIn />
          <Switch>
            <Route exact path='/' component={RealTimeIssues} />
            <Route path='/login' component={Authentication} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    )
  }
}



