import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default function (ComposedComponent) {

    class Authendicate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.push('/login')
            } if (this.props.isAuthenticated){

            }
        }

        render() {
            return (
                <ComposedComponent{...this.props}/>
            );
        }
    }

    function MapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(MapStateToProps)(withRouter(Authendicate))
}