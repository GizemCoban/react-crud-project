import React, {Component} from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
import faker from 'faker'
import MyModal from './MyModal'


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
        }
        //console.log(this.props)
    }

    handleItemClick = (e, {name}) => (this.setState({activeItem: name}));
    //handleOpen = () => this.setState({modalOpen: true})
    //handleClose = () => this.setState({modalOpen: false})

    triggerM = (
        <span>
        <Image avatar src={faker.internet.avatar()}/> {faker.name.findName()}
      </span>
    )

    render() {
        const {activeItem} = this.state;
        console.log(this.state.value)
        return (
            <div>
                <Menu stackable inverted color='teal'>
                    <Menu.Item>
                        <Image src="http://www.netas.com.tr/media/13945/netas.png" size="tiny"/>
                    </Menu.Item>
                    <Menu.Item>


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

export default MyNavb