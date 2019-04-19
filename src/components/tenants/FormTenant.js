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
            {key: 'e', text: 'Enabled', value: true},
            {key: 'd', text: 'Disabled', value: false}
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

    handleClose = () => {
        this.props.history.push('/tenants');
    };

    render() {
        return (
            <div>
                <div style={{marginTop: '20px'}}>
                    <MyPlaceholder/>
                </div>
                <Modal open={true} onClose={this.handleClose} dimmer="blurring" size="small"
                       closeIcon>
                    <Modal.Header>Tenant Information</Modal.Header>
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
                                <Button type="submit" circular fluid color="teal">Add</Button>
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

