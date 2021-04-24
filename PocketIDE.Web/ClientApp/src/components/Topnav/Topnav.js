import React from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Topnav() {
  return (
    <header className='primary'>
      <Navbar className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3' light>
        <Container>
          <NavbarBrand tag={Link} to='/' className='text-white'>PocketIDE</NavbarBrand>
          <NavLink tag={Link} className='text-white' to='/'><FontAwesomeIcon icon={faUserCircle} size="2x"/></NavLink>
        </Container>
      </Navbar>
    </header>
  )
}
