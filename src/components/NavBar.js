import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link} to='home'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          as={Link} to='first-page'
          name='first-page'
          active={activeItem === 'first-page'}
          onClick={this.handleItemClick}
        >
          Page 1
        </Menu.Item>

        <Menu.Item
          as={Link} to='second-page'
          name='second-page'
          active={activeItem === 'second-page'}
          onClick={this.handleItemClick}
        >
          Page 2
        </Menu.Item>

        <Menu.Item
          as={Link} to='third-page'
          name='third-page'
          active={activeItem === 'third-page'}
          onClick={this.handleItemClick}
        >
          Page 3
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar
