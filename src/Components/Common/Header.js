import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector } from 'react-redux';
import { FaShoppingCart, FaRegHeart, FaRegUser } from "react-icons/fa";
import CartFlyout from './CartFlyout';


const Header = () => {
    const [cartFlyout, setCartFlyout] = useState();
    

    const getData = useSelector((state)=> state.tasks.CartData);


    console.log("Checking Fetched Data: ", getData)

    const getWishlist = useSelector((state)=> state.tasks.WishList);


    console.log(" Fetched WishList: ", getWishlist)

    const onCartHandle = (e) => {
        setCartFlyout("flyoutOpen")
    }

    const closeFlyout = () => {
        setCartFlyout()
    }

   

  return (
    <header className='header'>
        <Navbar bg="" data-bs-theme="dark">
            <Container>
                <NavLink to="/cart" className="nav-link">Product</NavLink>
               
                <Nav className="mx-auto">
                    <NavLink to="/"><img src="	https://helendo.jamstacktemplates.dev/images/logo/dark-logo.png" alt=""/></NavLink>
                </Nav>
                
                    <NavLink to="/"  className="ms-4 position-relative bedge-wrap"><FaRegUser/></NavLink>
                    <NavLink   NavLink to="/wishlist" className="mx-4 position-relative bedge-wrap"><FaRegHeart/> <span className='text-dark'>{getWishlist.length}</span></NavLink>
                    <Button variant='' onClick={onCartHandle} className='position-relative bedge-wrap'><FaShoppingCart/><span className='text-dark'>{getData.length}</span></Button>
                    {cartFlyout && <CartFlyout closeFlyout={closeFlyout} flyoutOpen={cartFlyout}/>}
                    
                {/* </NavLink> */}
            </Container>
        </Navbar>
    </header>
  )
}

export default Header