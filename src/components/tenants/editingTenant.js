import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTenant, editTenant} from "../../actions";
import FormTenant from './FormTenant'
import * as _ from "lodash";
import MyPlaceholder from "../semantic/MyPlaceholder";
import {Loader} from "semantic-ui-react";

class EditingTenant extends Component {
    componentDidMount() {
        this.props.fetchTenant(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editTenant(this.props.match.params.id, formValues);
    };

    render() {
        // console.log(this.props);
        if (!this.props.tenant) return (
            <div>
                <MyPlaceholder/>
                <Loader size='massive'>Loading</Loader>
            </div>);
        return (
            <div>
                <FormTenant
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.tenant, 'tName', 'tStatus')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {tenant: state.tenant[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchTenant, editTenant})(EditingTenant);