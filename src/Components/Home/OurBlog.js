import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import {BlogData} from '../../Data/blogData'

const OurBlog = () => {
    const [blogData, setBlogData] = useState(BlogData);

    const {id} = useParams(); 
    console.log("Params :", id);

  return (
    <div className='ourblog-wrap pt-120'>
        <Container>
            <h3 className='sec-title text-center'>Our Blog</h3>
            <div className='row'>
                {
                    blogData.map((blogItem)=>(
                        <div className='col-3 blog-main-wrap'>
                            <div className='img-wrap position-relative overflow-hidden'>
                                <img src={blogItem.productImg} alt="" className="w-100"/>
                                <div className='read-more-blog position-absolute'>
                                    <Link to={`/blog/${blogItem.id}`} >Read more +</Link>
                                </div>
                            </div>
                            <div className='detail'>
                                <h5 className='mt-2'>{blogItem.title}</h5>
                                <p>
                                    {blogItem.blogDate}
                                    <span className='mx-2'>/</span>
                                    <span>{blogItem.blogAdmin}</span>
                                    <span className='mx-2'>/</span>
                                    <span>in {blogItem.blogCat}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default OurBlog