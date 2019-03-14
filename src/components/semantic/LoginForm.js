import React from 'react';
import {Button, Form, Icon, Divider} from 'semantic-ui-react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    /*console.log("Username: " + this.state.username + "\n Password: " + this.state.password);*/
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Divider/>
        <Form.Input icon='users' iconPosition='left' placeholder='Kullanıcı Adı' type='input'
                    value={this.state.username} onChange={event => {
          this.setState({username: event.target.value})
        }}/>
        <Form.Input icon='key' iconPosition='left' placeholder='Şifre' type='password'
                    value={this.state.password} onChange={event => {
          this.setState({password: event.target.value})
        }}/>
        <Divider/>
        <Button type="submit" animated color="teal" fluid>
          <Button.Content visible>Giriş</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow alternate circle right'/>
          </Button.Content>
        </Button>
        <Divider/>
      </Form>
    );
  }
}

export default LoginForm;