import { Button } from 'semantic-ui-react'
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const LogoutButton = (props) => {

  const handleLogout = e => {
    e.preventDefault()
    window.localStorage.removeItem('token')
    props.history.push('/')
  }
  return (
    <Button negative onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default withRouter(LogoutButton);