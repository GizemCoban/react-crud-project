import React, {Component} from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
import faker from 'faker'
import MyModal from './MyModal'
import {withRouter} from "react-router-dom";

class MyNavb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '', modalOpen: false,
            optUser: [
                {key: 1, text: 'Profil', value: 1, icon: 'user'},
                {key: 2, text: 'Ayarlar', value: 2, icon: 'options'},
                {key: 3, text: 'Çıkış', value: 3, icon: 'log out'}
            ]
        };
        this.handleRedirectDash = this.handleRedirectDash.bind(this);
        this.handleItemA = this.handleItemA.bind(this);
        this.handleItemR = this.handleItemR.bind(this);
        this.handleItemT = this.handleItemT.bind(this);
        this.handleItemU = this.handleItemU.bind(this);
        //console.log(this.props)
    }

    handleItemT = (e, {name}) => {
        (this.setState({activeItem: name}))
        return this.props.history.push('/tenants')
    };
    handleItemU = (e, {name}) => {
        (this.setState({activeItem: name}))
        return this.props.history.push('/users')
    };
    handleItemR = (e, {name}) => {
        (this.setState({activeItem: name}))
        return this.props.history.push('/roles')
    };
    handleItemA = (e, {name}) => {
        (this.setState({activeItem: name}))
        return this.props.history.push('/authority')
    };
    //handleOpen = () => this.setState({modalOpen: true})
    //handleClose = () => this.setState({modalOpen: false})
    handleRedirectDash = () => {
        return this.props.history.push('/dashboard')
    };
    triggerM = (
        <span>
        <Image avatar src={faker.internet.avatar()}/> {faker.name.findName()}
      </span>
    );

    render() {
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
                    <Menu.Item position='right'>
                        <Dropdown text='Username' options={this.state.optUser} trigger={this.triggerM} selection
                                  value={this.state.value}
                                  onChange={this.handleChange}/>
                    </Menu.Item>
                </Menu>
                <MyModal open={this.state.modalOpen} onClose={this.handleClose}/>
            </div>
        )
    }
}

export default withRouter(MyNavb)