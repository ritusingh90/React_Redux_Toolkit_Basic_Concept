import React from 'react'
import { Button } from 'react-bootstrap'

const OrderDetail = () => {
  return (
    <div className='order-info'>
        <div className='order-detail'>
            <h2 class="title">Your order</h2>
            <table class="w-100 text-sm text-left">
                <thead class="">
                    <tr>
                        <th scope="col" class="font-normal">Product</th>
                        <th scope="col" class="font-normal text-right">Total</th>
                    </tr>
                </thead>
                <tbody class="border-top">
                    <tr class="border-top">
                        <th scope="row" class="">Table Wood Pine X1</th>
                        <td class=" text-right">$50.00</td>
                    </tr>
                    <tr class="border-top">
                        <th scope="row" class="">Nancy Chair X1</th>
                        <td class=" text-right">$90.00</td>
                    </tr>
                    <tr class="border-top">
                        <th scope="row" class=" font-bold whitespace-nowra">Subtotal</th>
                        <td class=" text-right">$140.00</td>
                    </tr>
                    <tr class="border-top">
                        <th scope="row" class="">Total</th>
                        <td class=" text-right">$140.00</td>
                    </tr>
                </tbody>
            </table>
            <div class="payment-info pb-[20px]">
                <h2 class="text-[18px] mb-[10px]">Check payments</h2>
                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
            </div>
            <div class="payment-info">
                <h2 class="text-[18px] mb-[10px]">What is PayPal?</h2>
                <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
            </div>
        </div>
        <p class="detail-info">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<a class="ml-[5px]" href="/privacy">privacy policy.</a></p>
        <div class="payment-btn-wrap pt-[35px]">
            <Button variant='dark' className='primary-btn w-100'>Place Order</Button>
        </div>
    </div>
  )
}

export default OrderDetail