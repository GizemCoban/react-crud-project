import React from 'react'
import {Button, Dropdown, Form, Header, Image, Modal} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import {withRouter} from "react-router-dom";
import MyPlaceholder from "../semantic/MyPlaceholder";

class formTenant extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    onSubmit = async (formValues, dispatch) => {
        try {
            await this.props.onSubmit(formValues);
        } catch (e) {
            console.log(e)
        }
        this.props.history.push('/tenants');
        dispatch(reset('formTenant'));
    };

    handletName({input}) {
        return (
            <div>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Tenant Name' {...input} autoComplete='off'/>
                </Form.Field>
            </div>
        )
    }

    handletStatus({input}) {
        const options = [
            {key: 'e', text: 'Enabled', value: true},
            {key: 'd', text: 'Disabled', value: false}
        ];
        return (<div>
                <Form.Field>
                    <label>State</label>
                    <Dropdown
                        {...input}
                        options={options}
                        placeholder='Tenant Status'
                        button
                        selection
                        value={input.value}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };

    handletAdmin({input}) {
        const options = [
            {key: 'e', text: 'Enabled', value: true},
            {key: 'd', text: 'Disabled', value: false}
        ];
        return (<div>
                <Form.Field>
                    <label>T. Admin</label>
                    <Dropdown
                        {...input}
                        options={options}
                        placeholder='Tenant Admin'
                        button
                        selection
                        value={input.value}
                        onChange={(param, data) => input.onChange(data.value)}
                    />
                </Form.Field>
            </div>
        )
    };

    handleClose = () => {
        this.props.history.push('/tenants');
    };


    render() {
        return (
            <div>
                <div style={{marginTop: '20px'}}>
                    <MyPlaceholder/>
                </div>
                <Modal open={true} onClose={this.handleClose} dimmer="blurring" size="large"
                       closeIcon>
                    <Modal.Header>Tenant Information</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='small'
                               src='https://react.semantic-ui.com/images/avatar/large/rachel.png'/>
                        <Modal.Description>
                            <Header as="h3">Tenant Information</Header>
                            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Form.Group inline>
                                    <Field name='tName' component={this.handletName}/>
                                    <Field name='tStatus' component={this.handletStatus}/>
                                    <Field name='tAdmin' component={this.handletAdmin}/>
                                </Form.Group>
                                <Button type="submit" circular color="teal" floated='right' size='large'>Apply</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default reduxForm({
    form: 'formTenant'
})(withRouter(formTenant));

