import React from 'react'
import { Container } from 'react-bootstrap'

const ContactDetail = () => {
  return (
    <div className='contactDetail-wrap border-top pt-4'>
        <Container>
            <div className='row'>
                <div className='col-3'>
                    <h5>Address</h5>
                    <ul>
                        <li>Helendo, Chicago, USA 2023</li>
                        <li>+846677028028</li>
                        <li>
                            Social
                        </li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h5>Help & Information</h5>
                    <ul>
                        <li>Help & Contact Us</li>
                        <li>Returns & Refunds</li>
                        <li>Online Stores</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h5>About Us</h5>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ Page</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h5>Newsletter</h5>
                    <ul className='d-flex'>
                        <li>Term & Condition</li>
                        <li>Policy</li>
                        <li>Map</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ContactDetail