import React from 'react'
import { Container, Navbar, NavbarBrand, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function Topnav() {
  return (
    <header className='primary'>
      <Navbar className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-1' light>
        <Container className='d-flex align-items-center p-2'>
          <Link to='/' className='no-decoration primary'>
            <h3 className='bold italic'>Pocket IDE</h3>
          </Link>
          <Link to='/' className='no-decoration primary'>
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
          </Link>
        </Container>
      </Navbar>
    </header>
  )
}
