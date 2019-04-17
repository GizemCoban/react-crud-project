import React from 'react'
import {Button, Dropdown, Form, Header, Image, Modal} from "semantic-ui-react";
import {Field, reduxForm, reset} from "redux-form";
import {connect} from "react-redux";
import {addTenant} from "../../actions";
import {withRouter} from "react-router-dom";
import MyPlaceholder from "../semantic/MyPlaceholder";

class addingTenant extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    onSubmit = async (formValues, dispatch) => {
        this.props.history.push('/tenants');
        const data = JSON.stringify({
            tName: formValues.tName,
            tStatus: formValues.tStatus === 1 ? true : false
        });
        try {
            await this.props.addTenant(data);
        }catch (e) {
            console.log(e.message)
        }
        dispatch(reset('Tenants'));
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
    handleClose=()=>{
        this.props.history.push('/tenants');
    };

    render() {
        return (
            <div>
                <div style={{marginTop:'20px'}}>
                    <MyPlaceholder/>
                </div>
                <Modal open={true} onClose={this.handleClose} dimmer="blurring" size="small"
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
                                <Button type="submit" circular fluid color="teal">Add</Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

const fromWrap = reduxForm({
    form: 'addingTenant'
})(withRouter(addingTenant));

export default connect(null, {addTenant})(fromWrap);
