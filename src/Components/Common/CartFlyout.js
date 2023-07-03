import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { deleteItem, total } from '../../Features/productSlice';
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const CartFlyout = ({closeFlyout, flyoutOpen}) => {
    const getData = useSelector((state)=> state.tasks.CartData);
    const total = useSelector((state) => state.tasks.total);
    console.log("finding total", total)


    console.log("Checking Fetched Data: ", getData)

    const dispatch = useDispatch();

    const deleteHandle = (id) => {
        dispatch(deleteItem(id))
    }


  return (
    <div className={`cartflyout-wrap ${flyoutOpen}`}>
        <Button variant='' onClick={closeFlyout} className='p-0'><AiOutlineClose/></Button>
        
        {
            getData.length ? (
                <>
                    {getData.map((cartItem)=>(
                        <div className="row cart-item-list mt-4 mb-4">
                            <div className='col-4'>
                            <NavLink to={`/cart/${cartItem.id}`}><img src={cartItem.productImg} alt="" className="w-100"/></NavLink>
                            </div>
                            <div className='col-6'>
                                <p className='mb-1' style={{fontWeight: '600'}}>{cartItem.name}</p>
                                <p className='mb-1 '><span>Price:</span> ${cartItem.price * cartItem.qnty}</p>
                                <p className='mb-1'><span>Qnty:</span> {cartItem.qnty}</p>
                                
                            </div>
                            <div className='col-2'>
                                <Button variant='' onClick={() => deleteHandle(cartItem.id)}><FaTrashAlt/></Button>
                            </div>
                        </div>
                        
                    ))}

                    <div className='d-flex justify-content-between mb-3'>
                        <span className='fw-normal fs-5'>Subtotal:</span>
                        <span className='fw-normal fs-5'>${total}</span>
                    </div>
                    

                    <Link to="/viewcart" className="secondary-btn btn btn-outline-dark w-100 mb-3 py-2">View Cart</Link>

                    <Link to="/checkout" className="primary-btn btn btn-dark w-100 py-2">Checkout</Link>
                    
                </>
            ) : (
                <div className='text-center p-5'>
                    <p>Your Cart is Empty</p>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png?f=webp" alt="" style={{width: "200px"}}/>
                </div>
            )
        }
    </div>
  )
}

export default CartFlyout