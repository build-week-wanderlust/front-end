import React from 'react'
import LogoutButton from './LogoutButton'
import { Menu, Dropdown } from 'semantic-ui-react'
const Settings = (props) => {
  return (

      <Dropdown item text='Settings'>
        <Dropdown.Menu>
          <Dropdown.Item>{<LogoutButton/>}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

  )
}

export default Settings