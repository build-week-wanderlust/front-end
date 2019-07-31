import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import '../styles/Header.css'
import Settings from './Settings'

const Header = (props) => {
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
          <Link exact to ="/contact">
            <Menu.Item>
              Contact
            </Menu.Item>
          </Link>
          <Menu.Item position='right'>
            <Settings/>
            <SearchBar />
          </Menu.Item>
        </Menu>
  )
}


export default Header