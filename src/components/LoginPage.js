import React from 'react'
import { Segment } from 'semantic-ui-react'
import Logo from './semantic/Logo'
import LoginForm from './semantic/LoginForm'


class LoginPage extends React.Component {

  render() {
    return (
      <div className='ortala'>
          <div className='golge'>
            <Segment color="green" size='massive' padded id="golge">
              <div style={{ textAlign: 'center' }}>IoT Platform</div>
              <br/>
              <Logo/>
              <LoginForm/>
            </Segment>
          </div>
      </div>
    )
  }
}

export default LoginPage