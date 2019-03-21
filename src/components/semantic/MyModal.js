import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {Form, Dropdown, Button, Modal, Image, Header} from "semantic-ui-react";

class MyModal extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    handleInput({input}) {
        return (
            <div>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Tenant Name' {...input} autoComplete='off'/>
                </Form.Field>
            </div>
        )
    }

    handleDropdown({input}) {
        const options = [
            {key: 'e', text: 'Enabled', value: 1},
            {key: 'd', text: 'Disabled', value: 0}];
        return (<div>
                <Form.Field>
                    <label>State</label>
                    <Dropdown
                        {...input}
                        options={options}
                        placeholder='Choose an option'
                        selection
                        value={input.value}
                        onChange={(param, data) => input.onChange(data.value)}

                    />
                </Form.Field>
            </div>
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues);

    };

    render() {
        return (
            <div>
                <Modal open={this.props.open} onClose={this.props.onClose} dimmer="blurring" size="small" closeIcon>
                    <Modal.Header>Tenant adding</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                        <Modal.Description>
                            <Header as="h3">Tenant Information</Header>
                            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Form.Group>
                                    <Field name='tName' component={this.handleInput}/>
                                    <Field name='tStatus' component={this.handleDropdown}/>
                                </Form.Group>
                                <Button type='submit' circular fluid color="teal">Add</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default reduxForm({
        form: 'MyModal'
    }
)(MyModal);