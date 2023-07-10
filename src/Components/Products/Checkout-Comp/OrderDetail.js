import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const OrderDetail = () => { 
    const getData = useSelector((state)=> state.tasks.CartData);
    const total = useSelector((state) => state.tasks.total);
    console.log("finding total", total)


    console.log("Checking Fetched Data: ", getData)

    const dispatch = useDispatch();

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
                    {
                        getData.map((item)=> (
                            <tr class="border-top" key={item.id}>
                                <th scope="row" class="">{item.name}</th>
                                <td class=" text-right">${item.price * item.qnty}</td>
                            </tr>
                        ))
                    }
                   
                    <tr class="border-top">
                        <th scope="row" class=" font-bold whitespace-nowra">Subtotal</th>
                        <td class=" text-right">${total}</td>
                    </tr>
                    <tr class="border-top">
                        <th scope="row" class="">Total</th>
                        <td class=" text-right">${total}</td>
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