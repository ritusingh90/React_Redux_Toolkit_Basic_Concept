import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector } from 'react-redux';
import {deleteItem, resetCart, addProduct, removeProduct, total} from '../../Features/productSlice'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import Pagetitle from '../Common/Page-title';

const ViewCart = ({id}) => {
  const getData = useSelector((state)=> state.tasks.CartData);

  const total = useSelector((state) => state.tasks.total);
  console.log("finding total", total)

    console.log("Checking Fetched Data: ", getData)

    const dispatch = useDispatch()

    const history = useNavigate();

    const deleteHandle = (id) => {
        dispatch(deleteItem(id));
        history("/");
    }

    const increaseCartItem = (e) => {
      dispatch(addProduct(e))
  }


  const remove = (item)=>{
      dispatch(removeProduct(item))
    }
    

    const resetHandler = (e) => {
      e.preventDefault();
      dispatch(resetCart());
      
    };
  return (
    <>
      <Pagetitle pageTitle="Cart"/>
        <Container>
          <Table className='item-table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {getData.length ? (
                getData.map((cartItem)=>(
                  <tr key={cartItem.id}>
                    <td>
                      <div className='d-flex align-items-center'>
                          <img src={cartItem.productImg} alt="" style={{width: '80px'}}/>
                          <h6 className='ms-4'>{cartItem.name}</h6>
                      </div>
                    </td>
                    <td>${cartItem.price}</td>
                    <td>
                      <div className='d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",color:"#111"}}>
                          <span style={{fontSize:24}} onClick={cartItem.qnty <=1 ? ()=>deleteHandle(cartItem.id) : ()=>remove(cartItem)}>-</span>
                          <span style={{fontSize:22}}>{cartItem.qnty}</span>
                          <span style={{fontSize:24}} onClick={()=>increaseCartItem(cartItem)}>+</span>
                      </div>
                    </td>
                    <td>${cartItem.price * cartItem.qnty}</td>
                    <td><button className='item-delete' onClick={() => deleteHandle(cartItem.id)}><FaTrashAlt/></button></td>
                  </tr>
                ))
              ):(
                <tr>
                  <td colSpan="5" className='text-center p-4'>No Item Found In Cart</td>
                </tr>
              )}
            </tbody>
          </Table>
          <div className='row mt-4 mb-4' >
            <div className='col-6'>
              <NavLink to="/cart" className="primary-btn btn-dark btn">&#x2190; Continue Shopping</NavLink>
            </div>
            <div className='col-6'>
              {getData.length > 0 && (
                <div className='btn-wrap d-flex justify-content-end '>
                    <Button variant='outline-dark' onClick={resetHandler} className="secondary-btn">
                        Clear Wishlist
                    </Button>
                </div>
                
              )}
            </div>
          </div>
          <div className='row mt-4 other-checkout-detail'>
              <div className='col-6'>
                <h5>Coupon Discount</h5>
                <form>
                  <div className='from-group'>
                    <label>Enter your coupon code if you have one.</label>
                    <input type="text" value="" placeholder='Coupon Code' readOnly className='form-control'/>
                  </div>
                  <div className='btn-wrap'>
                    <Button variant='outline-dark' className='secondary-btn py-3 px-5'>Apply coupon</Button>
                  </div>
                </form>
              </div>
              <div className='col-4 offset-md-2'>
                <div className='total-amt-wrap'>
                  <ul>
                    <li>
                      <span className='title'>Subtotal:</span>
                      <span className='price'>${total}</span>
                    </li>
                    <li>
                      <span className='title'>Total:</span>
                      <span className='price'>${total}</span>
                    </li>
                  </ul>
                </div>
                <NavLink to="/checkout" className="btn btn-dark primary-btn w-100 mt-4">Proceed to checkout</NavLink>
              </div>
            </div>
          
        </Container>
    </>
  )
}

export default ViewCart