import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './LoginPage'
import DashContent from './semantic/DashContent'



class MyRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact strict path="/login" component={LoginPage}/>
          <Route exact strict path="/dashboard" component={DashContent}/>
        </div>
      </Router>

    )
  }
}

export default MyRouter