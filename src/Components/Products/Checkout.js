import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BillingForm from './Checkout-Comp/BillingForm';
import OrderDetail from './Checkout-Comp/OrderDetail';

const Checkout = () => {
  return (
    <>
        <Container>
            <Row>
                <Col className='col-7'>
                  <div class="customer-zone d-flex align-items-center bg-[#f4f5f7] p-[14px_30px_14px]">
                    <div class="icon text-green-500 mr-[10px]">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                      </svg>
                    </div>
                    <h2 class="title text-[16px] leading-[28px] max-sm:whitespace-nowrap max-sm:text-ellipsis overflow-hidden">Returning customer?<button type="button" class="ml-[5px] transition-all hover:text-primary">Click here to login</button></h2>
                  </div>
                  <BillingForm/>
                </Col>
                <Col className='col-5'>
                  <div class="xl:col-span-5 lg:col-span-6 col-span-12">
                    <div class="coupon-zone flex items-center bg-[#f4f5f7] p-[14px_30px_14px]">
                      <div class="icon text-green-500 mr-[10px]">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"></path>
                        </svg>
                      </div>
                      <h2 class="title text-[16px] leading-[28px] max-sm:whitespace-nowrap max-sm:text-ellipsis overflow-hidden">Have a coupon?<button type="button" class="ml-[5px] transition-all hover:text-primary">Click here to enter your code</button></h2>
                    </div>
                  </div>
                  <OrderDetail/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Checkout