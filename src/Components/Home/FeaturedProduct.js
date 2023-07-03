import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../Features/productSlice'
import { FeatureData } from '../../Data/ProductData'
import { NavLink } from 'react-router-dom'

const FeaturedProduct = () => {
    const [feature, setFeature] = useState(FeatureData)

   


    console.log("Feature Data:", feature)
    const dispatch = useDispatch();

    const addProductHandle = (e)=> {
        dispatch(addProduct(e))
    }

  return (
    <div className='fp-wrap '>
        <Container>
            {feature.map((element, id)=> (
                <div className='row pt-120' key={element.id}>
                    <div className={`col-6 ${element.className}`}>
                        <img src={element.productImg} alt=""/>
                    </div>
                    <div className='col-6'>
                        <p className='title-tag'>FEATURED PRODUCT</p>
                        <h3 className='sec-title'>{element.name}</h3>
                        <p className='desc'>{element.desc}</p>
                        <NavLink to={`/cart/${element.id}`} className="btn secondary-btn btn-outline-dark">Only ${element.price} <span>&#x2192;</span></NavLink>
                    </div>
                </div>
            ))}
            
        </Container>
    </div>
  )
}

export default FeaturedProduct