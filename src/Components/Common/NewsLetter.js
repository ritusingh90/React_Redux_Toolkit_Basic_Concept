import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewsLetter = () => {
  return (
    <div className='newsletter-wrap' style={{padding: "60px 0"}}>
        <Container>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='sec-title'>Our Newsletter</h2>
                </div>
                <div className='col-6'>
                    <Form>
                        <Row className="align-items-center">
                            <Col sm={10} className="my-1 pe-0">
                                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                    Name
                                </Form.Label>
                                <Form.Control id="inlineFormInputName" placeholder="Your Email Address" className='rounded-0 from-control' />
                            </Col>
                            <Col sm={2} className="my-1 ps-0">
                                <Button variant='dark' type="submit" className='primary-btn'>Subscribe</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NewsLetter