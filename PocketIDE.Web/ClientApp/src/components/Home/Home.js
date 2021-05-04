import React from 'react';
import { Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import UseWindowSize from '../../utils/UseWindowSize'
import AddButton from '../common/AddButton'

export default function Home() {
  const [isMobile, ] = UseWindowSize();

  return (
    <Container className={isMobile ? '' : 'card p-5 mt-3'}>
      <div className='center-children'>

        <h3 className='mt-5'>
          No projects found :(
        </h3>

        <FontAwesomeIcon icon={faCamera} size='4x' className='red-col-1 mt-5' />

        <Container className='mt-5'>
          <h3 className='separator red-col-1'> or </h3>
        </Container>

        <FontAwesomeIcon icon={faPencilAlt} size='4x' className='red-col-1 mt-5' />

      </div>

      <div className={isMobile ? 'center-children mt-5 pl-5' : 'offset-md-9 mt-5 pl-3'}>
          <svg width='101' height='147' viewBox='0 0 101 147' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd' d='M38.929 109.826C18.5524 90.1725 -4.79492 52.8578 1.58683 0.246132L25.3011 0.246124C29.0427 27.2582 37.2394 65.1631 54.3734 96.1021L55.6807 87.1565C59.644 70.6484 59.7191 70.7367 62.3954 73.881C62.5528 74.066 62.7192 74.2615 62.8959 74.4648L83.4044 111.43C86.2893 117.584 88.1037 121.238 90.0272 125.111C92.5012 130.093 95.1556 135.439 100.501 146.936L67.3123 139.267C41.9675 134.061 5.28363 119.055 10.6878 118.507L38.929 109.826Z' fill='#DB324D' />
          </svg>
      </div>

      <AddButton size='5x' urlRedirect="/project" />

    </Container>
  )
}
