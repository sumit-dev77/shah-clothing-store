import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

  const discount = Math.round(
    ((props.originalPrice - props.price) / props.originalPrice) * 100
  )

  return (
    <Link to={`/product/${props.id}`} className="w-full">
      <div className="w-full p-2 md:p-3 rounded-2xl md:rounded-4xl shadow-[0px_1px_2px_1px_rgba(0,0,0,0.20)]">

        <img
          className="w-full h-[55vw] sm:h-[45vw] md:h-65 lg:h-72 object-cover rounded-xl md:rounded-2xl"
          src={props.image}
          alt={props.name}
        />

        <div className="pt-2 md:pt-3">

          <h3 className="text-sm md:text-xl font-bold text-gray-700 truncate">
            {props.brand}
          </h3>

          <h4 className="text-sm md:text-lg font-semibold text-gray-800 line-clamp-1">
            {props.name}
          </h4>

          <h4 className="text-xs md:text-lg font-semibold text-gray-600">
            Type: {props.category}
          </h4>

          <div className="flex items-center gap-2 md:gap-3 mt-1">
            <h5 className="text-sm md:text-lg font-medium">
              ₹{props.price}
            </h5>

            <h5 className="text-xs md:text-lg font-medium line-through text-red-500">
              ₹{props.originalPrice}
            </h5>
          </div>

          <h5 className="text-xs md:text-lg font-medium text-green-500">
            {discount}% OFF
          </h5>

        </div>

      </div>
    </Link>
  )
}

export default ProductCard