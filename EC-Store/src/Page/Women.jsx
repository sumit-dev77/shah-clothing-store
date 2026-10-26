import React, { useState } from 'react'
import ProductCard from '../Components/Products/ProductCard';
import products from '../Data/Product';

const Women = () => {
   const [category, setCategory] = useState("All");

  const filteredProducts= products.filter((product)=>{
    const isWomen= product.gender ==="Women";
   const matchcategory=category ==="All" || product.category === category;
   return isWomen && matchcategory;
  })

 return (
  <div className="min-h-screen bg-[#E8E7E3] px-8 md:px-12 py-12">
    <div className="text-center mb-12">

      <p className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500 mb-4">
        Effortless everyday style
      </p>
      <h1 className="text-6xl md:text-8xl font-normal tracking-[-0.04em]">
        WOMEN
      </h1>
      <p className="mt-5 text-sm text-gray-600">
        Discover contemporary pieces made for every moment.
      </p>

    </div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-400 pb-5 mb-8">

      <div className="flex gap-5 sm:gap-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">

        <button
          onClick={() => setCategory("All")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "All"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`}    >
          ALL
        </button>
        <button
          onClick={() => setCategory("T-Shirts")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "T-Shirts"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`}   >
          T-SHIRTS
        </button>
        <button
        onClick={() => setCategory("Tops")}
        className={`text-sm font-medium tracking-wide transition ${
        category === "Tops"
          ? "border-b-2 border-black pb-2"
      : "text-gray-500 hover:text-black"
  }`}>TOPS
</button>
        <button
          onClick={() => setCategory("Jeans")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "Jeans"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`}   >
          JEANS
        </button>
        <button
          onClick={() => setCategory("Dresses")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "Dresses"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`}  >
          DRESS
        </button>
        <button
          onClick={() => setCategory("Hoodies")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "Hoodies"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`} >
          HOODIES
        </button>
        <button
          onClick={() => setCategory("Pants")}
          className={`text-sm font-medium tracking-wide transition
          ${
            category === "Pants"
              ? "border-b-2 border-black pb-2"
              : "text-gray-500 hover:text-black"
          }`} >
          PANTS
       </button>
      </div>
      <p className="text-xs text-gray-500 tracking-wide">
        {filteredProducts.length} PRODUCTS
      </p>

    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

      {filteredProducts.map((elem) => (
        <ProductCard
          key={elem.id}
          id={elem.id}
          name={elem.name}
          price={elem.price}
          originalPrice={elem.originalPrice}
          brand={elem.Brand}
          category={elem.category}
          image={elem.image}
        />
      ))}

    </div>

  </div>
)
}

export default Women
