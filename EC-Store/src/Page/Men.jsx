import React, { useState } from 'react'
import ProductCard from '../Components/Products/ProductCard';
import products from '../Data/Product';

const Men = () => {

  const [category, setCategory] = useState("All");

  const filteredProducts= products.filter((product)=>{
    const isMen= product.gender ==="Men";
   const matchcategory=category ==="All" || product.category === category;
   return isMen && matchcategory;
  })

  return (
  <div className="min-h-screen bg-[#E8E7E3] px-8 md:px-12 py-12">

    <div className="text-center mb-12">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500 mb-4">
        Modern essentials
      </p>
      <h1 className="text-6xl md:text-8xl font-normal tracking-[-0.04em]">
        MEN
      </h1>
      <p className="mt-5 text-sm text-gray-600">
        Explore everyday essentials and contemporary styles.
      </p>

    </div>
   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-400 pb-5 mb-8">

  <div className="flex gap-5 sm:gap-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
    <button
      onClick={() => setCategory("All")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "All"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`} >
      ALL
    </button>
    <button
      onClick={() => setCategory("T-Shirts")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "T-Shirts"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}>
      T-SHIRTS
    </button>
    <button
      onClick={() => setCategory("Jeans")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "Jeans"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`} >
      JEANS
    </button>
    <button
      onClick={() => setCategory("Shirts")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "Shirts"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      SHIRTS
    </button>
    <button
      onClick={() => setCategory("Hoodies")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "Hoodies"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`}
    >
      HOODIES
    </button>
    <button
      onClick={() => setCategory("Pants")}
      className={`whitespace-nowrap flex-shrink-0 text-sm font-medium tracking-wide transition pb-2
      ${
        category === "Pants"
          ? "border-b-2 border-black"
          : "text-gray-500 hover:text-black"
      }`} >
      PANTS
    </button>
  </div>

  <p className="text-xs text-gray-500 tracking-wide whitespace-nowrap">
    {filteredProducts.length} PRODUCTS
  </p>

</div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

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

export default Men
