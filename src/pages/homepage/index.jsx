import React from 'react'
import Slider from '../../components/slider';
import Categories from "../../components/categories/"
import FeaturedProducts from "../../components/featuredProducts/"
import Sales from '../../components/sales';
import Blogs from '../../components/blogs';


const Home = ({products, loading}) => {
  return (
    <div>
      <Slider />
      <Categories />
      <FeaturedProducts 
        products={products} 
        loading={loading} 
      />
      <Sales />
      <Blogs />
    </div>
  )
}

export default Home;