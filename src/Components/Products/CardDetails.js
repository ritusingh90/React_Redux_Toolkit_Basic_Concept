import React, {useEffect, useState} from 'react'
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addProduct, wishListProduct } from '../../Features/productSlice';
import Pagetitle from './../Common/Page-title';
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";


const CardDetails = () => {
    const [data, setData] = useState([]);
    const [itemTitle, setItemTitle] = useState("");

    const dispatch = useDispatch()

    const {id} = useParams();
    console.log("Params :", id);

    const getData = useSelector((state)=> state.tasks.FeatureData);


    console.log("Checking Fetched Data: ", getData[0].name)

    const compareProduct = () => {
        let compareProductData = getData.filter((e) => {
            return e.id == id
        });
        setData(compareProductData)

        setItemTitle (compareProductData[0].name)
    }

    

    const addItemtoCart = (e) => {
        dispatch(addProduct(e))
    }

    const wishListItem = (e) => {
        dispatch(wishListProduct(e))
    }

    

    useEffect(()=> {
        compareProduct();
        console.log('checkling data: ', data);
        console.log("Checking Fetched Data 1: ", getData)
    },[id])



  return (
    <div>
        <Pagetitle pageTitle={itemTitle} />
        <Container>
        {data.map((item)=>(<>
            <div className='detail row my-5' key={item.id}>
                <div className='img-wrap col-6'>
                    <img src={item.detailDesc.detailImg} alt="" width="585" height="585"/>
                </div>
                <div className='content col-6 '>
                    <h4>{item.name}</h4>
                    <p className='fs-1'>${item.price}</p>
                    <p>{item.desc}</p>
                    
                    <div className="action-wrap">
                        <Button variant='dark'  onClick={()=> addItemtoCart(item)} className='me-3 rounded-0 '>Add to Cart</Button>
                        <Button variant='outline-dark' onClick={()=> wishListItem(item)} className='me-3 rounded-0 '><FaRegHeart/></Button>
                    </div>

                    <ul className='mt-3'>
                        <li><strong>SKU:</strong> 505</li>
                        <li><strong>Categories:</strong> furniture</li>
                        <li><strong>Tags:</strong> chair</li>
                    </ul>
                </div>
            </div>
            <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="description" title="Description">
                    <div className='row align-items-center border-bottom mb-5 pb-5'>
                        <div className='col-7'>
                            <h4>Description</h4>
                            <p>{item.detailDesc.detailD}</p>
                        </div>
                        <div className='col-5'>
                            <img src={item.detailDesc.detailImg} alt="" className='w-100'/>
                        </div>
                    </div>
                    <div className='row align-items-center border-bottom mb-5 pb-5'>
                        <div className='col-7'>
                            <h4>Feature</h4>
                            <ul>
                                {
                                    item.featureList.list.map((ele)=>(
                                        <li>{ele.listD}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='col-5'>
                            <img src={item.detailDesc.detailImg} alt=""  className='w-100'/>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="additionalInformation" title="Additional information">
                    <div className='row'>
                        <div className='col-6'>
                            <p><strong>Weight :</strong>{item.weight}</p>
                        </div>
                        <div className='col-6'>
                            <p><strong>Dimension :</strong>{item.dimension}</p>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="review" title="Reviews" >
                    <h4 className='py-3'>Be the first to review "{item.name}"</h4>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your review *</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Row>
                        
                        <Button variant="dark" type="submit" className='primary-btn'>
                            Submit
                        </Button>
                        </Form>
                </Tab>
            </Tabs>
        </>
        ))}

        </Container>
        
    </div>
  )
}

export default CardDetails