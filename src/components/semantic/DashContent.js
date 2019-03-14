import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import MyNavb from './MyNavb'

class DashContent extends Component {


  render() {
    return (
      <div>
        <MyNavb/>
        <Header as='h3'>Dashboard Content</Header>
      </div>
    )
  }
}

export default DashContent