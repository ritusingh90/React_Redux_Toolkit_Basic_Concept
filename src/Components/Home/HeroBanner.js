import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <div className="banner-wrap" style={{background: "#f1f1f1"}}>
        <Container>
            <div className='row'>
                <div className='col-6' style={{paddingTop: "111px"}}>
                    <span className='yellow-color text-uppercase fw-bold banner-col-tag'>Chair<br/>Collection<br/>2023</span>
                    <h1 className='banner-title'>Welcome To<br/>Helendo Store</h1>
                    <p className='banner-desc'> Many desktop publishing packages and web page editors now use <br/> Lorem Ipsum as their default model text</p>
                    <div className='btn-wrap'>
                        <Link to="/cart" className="primary-btn btn-dark btn">Shop Now  &#x2192;</Link>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='img-wrap'>
                        <img src="https://helendo.jamstacktemplates.dev/images/products/helen-chair/585x585.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroBanner