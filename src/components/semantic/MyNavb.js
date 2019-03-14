import React, { Component } from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'
import faker from 'faker'
import MyModal from './MyModal'
import { connect} from 'react-redux'


class MyNavb extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      activeItem: '', value: '', modalOpen: false,
      optUser: [
        { key: 1, text: 'Profil', value: 1, icon: 'user' },
        { key: 2, text: 'Ayarlar', value: 2, icon: 'options' },
        { key: 3, text: 'Çıkış', value: 3, icon: 'log out' }
      ]

      , optMenu: [
        { key: 1, text: 'Tenants', value: 9, icon: 'train' },
        { key: 2, text: 'Users', value: 8, icon: 'users' },
        { key: 3, text: 'Roles', value: 7, icon: 'umbrella' },
        { key: 4, text: 'Authority', value: 6, icon: 'wrench' }
      ]
    }
    console.log(this.props)
  }

  handleItemClick = (e, { name }) => (e.preventDefault(), this.setState({ activeItem: name }))
  handleChange = (e, { value }) => (e.preventDefault(),
    this.setState({ value }, () => {
      if (value === 9) this.setState({ modalOpen: true })
      //else if ....
    }))
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const triggerM = (
      <span>
        <Image avatar src={faker.internet.avatar()}/> {faker.name.findName()}
      </span>
    )

    const { activeItem } = this.state.activeItem
    const { value } = this.state.value
    return (<div>
        <Menu stackable inverted color='teal'>
          <Menu.Item>
            <Image fluid src="http://www.netas.com.tr/media/13945/netas.png" size="tiny"/>
          </Menu.Item>
          <Menu.Item>
            <Dropdown
              onChange={this.handleChange}
              value={value}
              icon="angle down"
              text="Menu"
              options={this.state.optMenu}
            />
          </Menu.Item>

          <Menu.Item
            name='features'
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name='testimonials'
            active={activeItem === 'testimonials'}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
            Sign-in
          </Menu.Item>

          <Menu.Item position='right'>
            <Dropdown text='Username' options={this.state.optUser} trigger={triggerM} selection value={this.state.value}
                      onChange={this.handleChange}/>
          </Menu.Item>

        </Menu>
        <MyModal open={this.state.modalOpen} onClose={this.handleClose}/>
      </div>

    )
  }
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps)(MyNavb)