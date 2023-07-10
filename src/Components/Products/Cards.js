import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { data } from '../../Data/allProductData';
import { NavLink, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, wishListProduct } from '../../Features/productSlice';
import genreOptions from '../../Data/genreOptions.json'
import catProduct from '../../Data/catProduct.json'
import avalProduct from '../../Data/avalProduct.json'
import {AllProductData} from "../../Data/allProductData"
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import Pagetitle from '../Common/Page-title';

const Cards = () => {
    const [productItems, setProductData] = useState(AllProductData);
    const [searchTerm, setSearchTem] = useState("");
    const [tagList, setTagList] = useState("");
    
    const viewRef = useRef(null)

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


    const productList = useMemo(() => {
        //Search Filter
         if (tagList === "") {
            return productItems.filter((item) => {
              const searchFields =
                `${item.name.toLowerCase()} `+
                `${item.category.join("").toLowerCase()}`;
              return searchFields.includes(searchTerm.toLowerCase());
            });
        }

        //Dropdown Filter
        return productItems.filter((helendoProduct) => {
            const helendoProductGenre = helendoProduct.category.map((val) => val.toLowerCase());
            console.log("Helendo", helendoProductGenre);
            return helendoProductGenre.includes(tagList)
          });
       
    }, [tagList, searchTerm ]);
    

    const onfilterHandle = (product) => {
        console.log("get Filter Price", product.target.value)
        if(product.target.value === 'lth') {
            const ProductSort = productList.sort((a, b) => (a.price - b.price))
            setProductData(productList.map((item) => item.id === product.id ? {...ProductSort} : item ))

        }else if(product.target.value === 'htl') {
            const ProductSort = productList.sort((a, b) => (b.price - a.price))
            setProductData(productList.map((item) => item.id === product.id ? {...ProductSort} : item ))
        }
    }

    useEffect(() => {
    }, [searchTerm]);

    const ontcolHandle = () => {
        let abc = viewRef.current.children;
        for(let i = 0; i<abc.length; i++){
            abc[i].classList.remove('col-3')
            abc[i].classList.remove('col-2')
            abc[i].classList.add('col-4')
        }
    }
    const onfcolHandle = () => {
        let abc = viewRef.current.children;
        for(let i = 0; i<abc.length; i++){
            abc[i].classList.add('col-3')
            abc[i].classList.remove('col-2')
            abc[i].classList.remove('col-4')
        }
    }

    const onfivecolHandle = () => {
        let abc = viewRef.current.children;
        for(let i = 0; i<abc.length; i++){
            abc[i].classList.add('col-2')
            abc[i].classList.remove('col-4')
            abc[i].classList.remove('col-3')
        }
    }


  return (
    <div>
        <Pagetitle pageTitle="Product"/>
        <Container>
            <Row >
                <Col className='col-2'>
                    <div>
                        <h4>Categories</h4>
                        <ul>
                            
                            {catProduct.map((option, i) => (
                                <li><Button variant="" className='p-0' data-val={option.value} onClick={(e) => setTagList(e.target.getAttribute('data-val'))}>{option.label}</Button></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Availability</h4>
                        <ul>
                            {avalProduct.map((option, i) => (
                                <li><Button variant="" className='p-0' data-val={option.value} onClick={(e) => setTagList(e.target.getAttribute('data-val'))}>{option.label}</Button></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Tags</h4>
                        <ul>
                            {genreOptions.map((option, i) => (
                                <li><Button variant="" className='p-0' data-val={option.value} onClick={(e) => setTagList(e.target.getAttribute('data-val'))}>{option.label}</Button></li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col className='col-10'>
                    <div className='top-sec pb-4'>
                        <Row>
                            <Col className="col-8">
                                <div className='row align-items-center'>
                                    <p className='col-3 mb-0'>Showing {productItems.length} Items</p>
                                    <div className='form-group  d-flex col-5 align-items-center'>
                                        <label className='me-2'>Short By: </label>
                                        <select onChange={onfilterHandle} className='form-control p-1 px-3' style={{width: "calc(100% - 71px)"}}>
                                            <option value="">default</option>
                                            <option value="lth">Low to High</option>
                                            <option value="htl">High to low</option>
                                        </select>
                                    </div>
                                    <form className="flex flex-col w-72 col-4">
                                        <input
                                            className="border p-1 px-3 form-control"
                                            name="searchProduct"
                                            placeholder="Search Product"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTem(e.target.value)}
                                        />
                                    </form>
                                </div>
                            </Col>
                            <Col className='col-4 d-flex justify-content-end text-right'>
                                <Button variant="" onClick={ontcolHandle}><img src="https://helendo.jamstacktemplates.dev/images/grid-icon/columns-03.png" alt=""/></Button>
                                <Button variant="" onClick={onfcolHandle}><img src="https://helendo.jamstacktemplates.dev/images/grid-icon/columns-04.png" alt=""/></Button>
                                <Button variant="" onClick={onfivecolHandle}><img src="https://helendo.jamstacktemplates.dev/images/grid-icon/columns-05.png" alt=""/></Button>
                            </Col>
                        </Row>
                       
                    </div>
                    <div className='product-wrap row' ref={viewRef}>
                        {
                            productList.map((product, index)=> (
                                <div className='col-4 mb-3 position-relative product-item-wrap items-wrap' key={`p+${product.index}`} >
                                    <div className='img-wrap'>
                                        <Link to={`/cart/${product.id}`} ><img src={product.productImg} alt="" className='w-100'/></Link>
                                    </div>
                                    <div className='content '>
                                        <p className='title'>{product.name}</p>
                                        <p className='price'>${product.price}</p>
                                        <div className='popover-info absolute '>
                                            <Button  onClick={()=> addItemtoCart(product)}><FaShoppingCart/></Button>
                                            <Button onClick={()=> wishListItem(product)}><FaRegHeart/></Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Cards