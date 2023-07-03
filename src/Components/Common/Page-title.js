import React from 'react'
import { Container } from 'react-bootstrap'

const Pagetitle = ({pageTitle}) => {
  return (
    <div className='page-title-wrap'>
        <Container><h2>{pageTitle}</h2></Container>
    </div>
  )
}

export default Pagetitle