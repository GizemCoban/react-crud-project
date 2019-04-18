import React, {Component} from 'react';
import MyNavb from "./semantic/MyNavb";
import {Button, Header} from "semantic-ui-react";
import {connect} from "react-redux";
import {fetchTenants} from '../actions'
import {Link, withRouter} from "react-router-dom";
import Draggable from 'react-draggable'


class Tenants extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOpen = this.handleOpen.bind(this);
    }

    componentDidMount() {
        this.props.fetchTenants();
    }

    handleOpen = () => {
        this.props.history.push('/tenants/add')
    };


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
                    <br/>
                    <div className='ui cards'>
                        {this.props.tenant.map(tenants => {
                            return (
                                <Draggable axis="both">
                                    <div className="card" key={tenants._id}>
                                        <div className="content">
                                            <div className="header">
                                                {tenants.tName}
                                            </div>
                                            <div className="meta">
                                                Status: {tenants.tStatus === true ? (
                                                <span style={{color: 'blue'}}>açık</span>) : (
                                                <span style={{color: 'red'}}>kapalı</span>)}
                                            </div>
                                            <div className="description">
                                                {tenants.date}
                                            </div>
                                        </div>
                                        <div className="extra content">
                                            <div className="ui two buttons">
                                                <Link to={`/tenants/edit/${tenants._id}`}
                                                      className="ui basic green button">Edit</Link>
                                                <Link to={"*"} className="ui basic red button">Remove</Link>
                                            </div>
                                        </div>
                                    </div>
                                </Draggable>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {tenant: Object.values(state.tenant)}
};


export default connect(mapStateToProps, {fetchTenants})(withRouter(Tenants));

