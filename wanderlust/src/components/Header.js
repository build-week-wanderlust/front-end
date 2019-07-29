import React from 'react';
import { Segment, Link, Menu } from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment inverted className="header-menu">
        <Menu inverted>
          <Link exact to="/">
            <Menu.Item as="a" header>
              Honey & Hemp
            </Menu.Item>
          </Link>
          <Link exact to="/store">
            <Menu.Item as="a">
              Products
            </Menu.Item>
          </Link>
          <Link exact to="/blog">
            <Menu.Item as="a">
              Our Blog
            </Menu.Item>
          </Link>
          <Link exact to ="/cart">
            <Menu.Item as="a">
              My Cart
            </Menu.Item>
          </Link>  
          <Link exact to ="/about">
            <Menu.Item as="a">
              About Us
            </Menu.Item>
          </Link>  
          <Link exact to ="/contact">
            <Menu.Item as="a">
              Contact
            </Menu.Item>
          </Link>
        </Menu>
        <SearchBar/>
    </Segment>
  )
}

export default Header