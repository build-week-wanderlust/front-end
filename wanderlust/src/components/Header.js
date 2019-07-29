import React from 'react';
import { Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/Header.css'

const Header = () => {
  return (
    <Segment className="header-menu">
        <Menu>
          <Link exact to="/">
            <Menu.Item as="a" header>
              Wanderlust
            </Menu.Item>
          </Link>
          <Link exact to="/experiences">
            <Menu.Item as="a">
              Experiences
            </Menu.Item>
          </Link>
          <Link exact to="/blog">
            <Menu.Item as="a">
              Our Blog
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