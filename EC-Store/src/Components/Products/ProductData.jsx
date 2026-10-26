import React, { useState } from 'react'
import ProductCard from './ProductCard';
import products from "../../Data/Product";
const ProductData = () => {
 



  const [category, setCategory] = useState("All")

 

 const filteredProducts = products.filter((product) => {
  return category === "All" || product.category === category;
});


  return (
    <div></div>
     
  )
}

export default ProductData
