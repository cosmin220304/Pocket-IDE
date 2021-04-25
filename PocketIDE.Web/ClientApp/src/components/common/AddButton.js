import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function AddButton({ size, urlRedirect }) {
  return (
    <Container>
      <Link to={urlRedirect} className="float-right pointer">
        <FontAwesomeIcon icon={faPlusCircle} size={size} className="red-col-1 absolute" />
        <FontAwesomeIcon icon={faCircle} size={size} className="red-col-2" />
      </Link>
    </Container>
  )
}
