import React from 'react'
import { Button, Container } from 'react-bootstrap'

const DecoCollection = () => {
  return (
    <div className='decocol-wrap ' style={{background:"url(https://helendo.jamstacktemplates.dev/images/offer-colection/countdown.jpg)", padding: "120px 0", marginTop: '120px'}}>
        <Container>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='sec-title'>Deco Collection <span className='text-danger'>50% OFF</span></h3>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum</p>
                    <p>ghhg</p>
                    <div className='btn-wrap'><Button variant='dark' className='primary-btn'>Shop Now &#x2192;</Button></div>
                </div>
                <div className='col-4'>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default DecoCollection