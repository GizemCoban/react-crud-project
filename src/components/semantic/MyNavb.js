import React, {Component} from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
//import MyModal from './MyModal'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from '../../actions'

class MyNavb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
        };
        this.handleRedirectDash = this.handleRedirectDash.bind(this);
        this.handleItemA = this.handleItemA.bind(this);
        this.handleItemR = this.handleItemR.bind(this);
        this.handleItemT = this.handleItemT.bind(this);
        this.handleItemU = this.handleItemU.bind(this);
        //console.log(this.props)
    }

    handleItemT = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/tenants')
    };
    handleItemU = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/users')
    };
    handleItemR = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/roles')
    };
    handleItemA = (e, {name}) => {
        (this.setState({activeItem: name}));
        return this.props.history.push('/authority')
    };
    //handleOpen = () => this.setState({modalOpen: true})
    //handleClose = () => this.setState({modalOpen: false})
    handleRedirectDash = () => {
        return this.props.history.push('/dashboard')
    };

    logout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        const {activeItem} = this.state;
        console.log(this.state.value);
        return (
            <div>
                <Menu stackable inverted color='teal'>
                    <Menu.Item
                        onClick={this.handleRedirectDash}
                    >
                        <Image src="http://www.netas.com.tr/media/13945/netas.png" size="tiny"/>
                    </Menu.Item>
                    <Menu.Item
                        name='Tenants'
                        onClick={this.handleItemT}
                        active={activeItem === 'Tenants'}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Users'
                        active={activeItem === 'Users'}
                        onClick={this.handleItemU}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Roles'
                        active={activeItem === 'Roles'}
                        onClick={this.handleItemR}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Authority'
                        active={activeItem === 'Authority'}
                        onClick={this.handleItemA}
                    >
                    </Menu.Item>
                    <Menu.Item
                        name='Logout'
                        active={activeItem === 'Logout'}
                        onClick={this.logout.bind(this)}
                    >
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Dropdown text='Username' selection>
                            <Dropdown.Menu direction='left'>
                                <Dropdown.Divider/>
                                <Dropdown.Item text='Çıkış' onClick={this.logout.bind(this)}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                {/*<MyModal open={this.state.modalOpen} onClose={this.handleClose}/>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logout})(withRouter(MyNavb))