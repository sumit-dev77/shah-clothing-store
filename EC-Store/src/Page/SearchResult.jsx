import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/Products/ProductCard";
import products from "../Data/Product";
const SearchResults = () => {

  const [searchParams] = useSearchParams();

const search = (searchParams.get("search") || "").trim();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Search Results for "{search}"
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-xl">
          No products found.
        </p>
      ) : (
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
      )}

    </div>
  );
};

export default SearchResults;