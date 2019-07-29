import React from 'react';
import { Segment, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/Header.css'

const Header = () => {
  return (
        <Menu fluid className="header-menu">
          <Link exact to="/">
            <Menu.Item header>
              Wanderlust 
            </Menu.Item>
          </Link>
          <Link exact to="/experiences">
            <Menu.Item>
              Experiences
            </Menu.Item>
          </Link>
          <Link exact to ="/about">
            <Menu.Item>
              About Us
            </Menu.Item>
          </Link>  
          <Link exact to ="/contact">
            <Menu.Item>
              Contact
            </Menu.Item>
          </Link>
          <Menu.Item position='right'>
            <SearchBar/>
          </Menu.Item>
        </Menu>
  )
}

export default Header