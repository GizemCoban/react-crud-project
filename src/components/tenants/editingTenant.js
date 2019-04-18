import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchTenant} from "../../actions";

class EditingTenant extends Component {
    componentDidMount() {
        this.props.fetchTenant(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        if (!this.props.tenant) return <div>Loading</div>;
        return (
            <div>
                {this.props.tenant.tName}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {tenant: state.tenant[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchTenant})(EditingTenant);