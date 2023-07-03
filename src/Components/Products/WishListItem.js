import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector } from 'react-redux';
import {deleteWishlist, resetWishList} from '../../Features/productSlice'
import { FaTrashAlt } from "react-icons/fa";
import Pagetitle from '../Common/Page-title';

const WishListItem = () => {
    const getData = useSelector((state)=> state.tasks.WishList);


    console.log("Checking Fetched Data: ", getData)

    const dispatch = useDispatch()

    const deleteHandle = (id) => {
        dispatch(deleteWishlist(id))
    }

    const resetHandler = (e) => {
        e.preventDefault();
        dispatch(resetWishList());
        
      };
  return (
    <>
        <Pagetitle pageTitle="Wishlist"/>
        <Container>
          <Table  className='item-table' >
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {getData.length ? (
                getData.map((cartItem)=>(
                  <tr>
                    <td>
                        <div className='d-flex align-items-center'>
                            <img src={cartItem.productImg} alt="" style={{width: '80px'}}/>
                            <h6 className='ms-4'>{cartItem.name}</h6>
                        </div>
                    </td>
                    <td>{cartItem.price}</td>
                    <td><Button variant='dark' className='primary-btn'>Buy Now</Button></td>
                    <td><button className='item-delete' onClick={() => deleteHandle(cartItem.id)}><FaTrashAlt/></button></td>
                  </tr>
                ))
              ):(
                <tr>
                  <td colSpan="3" className='text-center p-4'>No Item Found In Wishlist</td>
                </tr>
              )}
            </tbody>
          </Table>

          {getData.length > 0 && (
                <div className='btn-wrap d-flex justify-content-end mt-4'>
                    <Button variant='outline-dark' onClick={resetHandler} className="secondary-btn">
                        Clear Wishlist
                    </Button>
                </div>
            )}
        </Container>
    </>
  )
}

export default WishListItem