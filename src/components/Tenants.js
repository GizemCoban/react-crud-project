import React, {Component} from 'react';
import MyNavb from "./semantic/MyNavb";
import {Button, Dropdown, Form, Header, Image, Modal} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import axios from "axios";


class Tenants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            tName: '',
            tStatus: '',
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOpen = () => {
        this.setState({modalOpen: true})
    };
    handleClose = () => {
        this.setState({modalOpen: false});

    };
    onSubmit = formValues => async dispatch => {
        this.setState({modalOpen: false});
        const headers = {'Content-Type': 'application/json'};
        const values = JSON.stringify({
            tName: formValues.tName,
            tStatus: formValues.tStatus === 1 ? true : false
        });
        console.log(values);
        try {
            const response = await axios.post('api/tenants/add', values, {headers: headers});
            console.log(response)
        } catch (e) {
            console.log(e.message);
        }
        dispatch(reset('Tenants'));
    };


    handleDropdown({input}) {
        const options = [
            {key: 'e', text: 'Enabled', value: 1},
            {key: 'd', text: 'Disabled', value: 0}
        ];
        return (<div>
                <Form.Field>
                    <label>State</label>
                    <Dropdown
                        {...input}
                        options={options}
                        placeholder='Choose an option'
                        button
                        selection
                        value={input.value}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };

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


    render() {
        return (
            <div>
                <MyNavb/>
                <div style={{margin: '10px 20px'}}>
                    <Button
                        size='large'
                        inverted
                        circular
                        color='green'
                        floated='right'
                        content='Add'
                        onClick={this.handleOpen}
                    />
                    <Header as='h3'>
                        All Tenants
                    </Header>
                    <Modal open={this.state.modalOpen} onClose={this.handleClose} dimmer="blurring" size="small"
                           closeIcon>
                        <Modal.Header>Tenant adding</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='small'
                                   src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
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
            </div>
        );
    }
}

export default reduxForm({form: 'Tenants'})(Tenants);