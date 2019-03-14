import React from 'react'
import { Header, Image, Modal, Form, Dropdown, Button } from 'semantic-ui-react'

class MyModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      options: [
        { key: 'e', text: 'Enabled', value: 1 },
        { key: 'd', text: 'Disabled', value: 0 }
      ]
    }
    //console.log(this.props)
    console.log(this.value)
  }

  handleChange = (e, { value }) => (this.setState({ value }))

  render() {
    const { value } = this.state.value
    return (
      <div>
        <Modal open={this.props.open} onClose={this.props.onClose} dimmer="blurring" size="small">
          <Modal.Header>Tenant adding</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
            <Modal.Description>
              <Header as="h3">Tenant Information</Header>
              <Form>
                <Form.Group>
                  <Form.Field>
                    <label>Name</label>
                    <input placeholder='Tenant Name'/>
                  </Form.Field>
                  <Form.Field>
                    <label>State</label>
                    <Dropdown
                      onChange={this.handleChange}
                      options={this.state.options}
                      placeholder='Choose an option'
                      selection
                      value={value}
                    />
                  </Form.Field>
                </Form.Group>
                <Button type='submit' circular fluid color="teal">Add</Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default MyModal