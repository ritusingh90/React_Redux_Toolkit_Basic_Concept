import React from 'react'
import HeroBanner from '../Components/Home/HeroBanner'
import BestSelling from '../Components/Home/BestSelling'
import DecoCollection from '../Components/Home/DecoCollection'
import OurBlog from '../Components/Home/OurBlog'
import FeaturedProduct from '../Components/Home/FeaturedProduct'

const Home = () => {
  return (
    <>
        <HeroBanner/>
        <FeaturedProduct/>
        <BestSelling/>
        <DecoCollection/>
        <OurBlog/>
    </>
  )
}

export default Home