import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { addProduct } from '../../Features/productSlice'
import { SellingData } from '../../Data/sellingProductData'
import { Link, NavLink, useParams } from 'react-router-dom';
import { addProduct, wishListProduct } from '../../Features/productSlice';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const BestSelling = () => {
    const [feature, setFeature] = useState(SellingData)

   


    console.log("Feature Data:", feature)
    const dispatch = useDispatch();

 

    const {id} = useParams(); 
    console.log("Params :", id);

    const getData = useSelector((state)=> state.tasks.FeatureData);


    console.log("Checking Fetched Data: ", getData)


    

    const addItemtoCart = (e) => {
        dispatch(addProduct(e))
    }

    const wishListItem = (e) => {
        dispatch(wishListProduct(e))
    }

  return (
    <div className='bestselling-wrap pt-120'>
        <Container>
            <h3 className='sec-title'>Best Selling</h3>
            <div className='list-wrap row  product-wrap'>
                {
                    feature.map((element, index)=>(
                        <div className='detail col-3 product-item-wrap position-relative' key={`${element.index}+1`}>
                            <div className='img-wrap'>
                                <Link to={`/cart/${element.id}`} ><img src={element.productImg} alt=""/></Link>
                            </div>
                            <div className='content'>
                                <p className='title'>{element.name}</p>
                                <p className="price">${element.price}</p>
                                {/* <NavLink to={`/cart/${element.id}`} className="primary-btn btn-dark">Only ${element.price}</NavLink> */}
                                <div className='popover-info absolute '>
                                    <Button  onClick={()=> addItemtoCart(element)}><FaShoppingCart/></Button>
                                    <Button onClick={()=> wishListItem(element)}><FaRegHeart/></Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
               
            </div>
        </Container>
    </div>
  )
}

export default BestSelling