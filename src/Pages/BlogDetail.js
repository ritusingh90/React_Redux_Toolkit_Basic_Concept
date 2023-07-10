import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { BlogData } from '../Data/blogData';
import { Container } from 'react-bootstrap';
import { BsQuote } from "react-icons/bs";

const BlogDetail = () => {
    const [data, setData] = useState([]);
    const [itemTitle, setItemTitle] = useState("");

    const {id} = useParams(); 
    console.log("Params :", id);

    const compareProduct = () => {
        let compareProductData = BlogData.filter((e) => {
            return e.id == id
        });
        setData(compareProductData)

        setItemTitle (compareProductData[0].name)
    }

    useEffect(()=> {
        compareProduct();
        console.log('checkling data: ', data);
    },[id])


  return (
    <div>
        
        <Container>
        {data.map((item)=>(<>
            <div className='detail row my-5' key={item.id}>
                <div className='img-wrap col-12'>
                    <img src={item.productImg} alt="" className='w-100' height='700'/>
                </div>
                <div className='content col-12 pt-4'>
                    <h4 className='mb-2'>{item.title}</h4>
                    <p className='offset-md-1 mt-5'>
                        {item.blogDate}
                        <span className='mx-2'>/</span>
                        <span>{item.blogAdmin}</span>
                        <span className='mx-2'>/</span>
                        <span>in {item.blogCat}</span>
                    </p>
                    <p className='offset-md-1'>{item.desc}</p>
                    <div className='offset-md-1 fw-bold  d-flex align-items-top'>
                        <span><BsQuote/></span>
                        <p className='mt-3'>{item.quote}</p>
                    </div>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className='img-wrap'>
                        <img src={item.blogImg1} alt="" className='w-100'/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='img-wrap'>
                        <img src={item.blogImg2} alt="" className='w-100'/>
                    </div>
                </div>
            </div>
        </>
        ))}

        </Container>
    </div>
  )
}

export default BlogDetail