import React from 'react'
import LogoutButton from './LogoutButton'
import { Menu, Dropdown } from 'semantic-ui-react'
const Settings = (props) => {
  return (
    <Menu.Menu position='right'>
      <Dropdown item text='Settings'>
        <Dropdown.Menu>
          <Dropdown.Item>{<LogoutButton/>}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>  
  )
}

export default Settings