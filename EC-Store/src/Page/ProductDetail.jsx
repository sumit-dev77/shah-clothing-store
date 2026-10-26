import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import products from '../Data/Product'
import {
  Package,
  Undo2,
} from "lucide-react"

const ProductDetail = () => {
  const { id } = useParams()
  const [num, setNum] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  const sizes = ["XS", "S", "M", "L", "XL"]

  const { addToCart } = useContext(CartContext)

  const quantityDEC = () => {
    if (num > 1) {
      setNum(num - 1)
    }
  }

  const quantityIN = () => {
    setNum(num + 1)
  }

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E8E7E3]">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    )
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  return (
    <div className="min-h-screen bg-[#E8E7E3] px-5 py-8 md:px-10 md:py-12">

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto">

        <div className="w-full md:w-[45%] flex justify-center">
          <img
            className="w-full max-w-[500px] h-[110vw] sm:h-[80vw] md:h-[40vw] object-cover"
            src={product.image}
            alt={product.name} />
        </div>

        <div className="w-full md:w-[50%] md:pt-5">

          <h1 className="text-xl md:text-[2vw] font-bold text-gray-700 mb-4 md:mb-8">
            {product.Brand}
          </h1>

          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            {product.name}
          </h1>

          <h5 className="text-2xl md:text-3xl font-medium">
            ₹{product.price}
          </h5>

          <div className="flex items-center gap-3 mt-2">
            <h5 className="text-lg md:text-2xl font-medium line-through text-red-500">
              ₹{product.originalPrice}
            </h5>

            <h2 className="text-lg md:text-2xl text-green-500">
              {discount}% OFF
            </h2>
          </div>

          <div className="mt-8 md:mt-10">
            <p className="text-sm font-semibold mb-4">
              SELECT SIZE
            </p>

            <div className="flex gap-3 md:gap-5">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-11 w-11 md:h-12 md:w-12 border text-base md:text-xl rounded-xl md:rounded-2xl font-semibold border-gray-500 ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}  >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center w-40 h-11 rounded-full px-5 bg-gray-300 mt-8">
            <button
              onClick={quantityDEC}
              className="text-2xl font-bold" >
              -
            </button>

            <h1 className="text-sm font-medium">
              Quantity {num}
            </h1>

            <button
              onClick={quantityIN}
              className="text-2xl font-bold" >
              +
            </button>
          </div>

          <button
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size")
                return
              }

              addToCart({
                ...product,
                size: selectedSize,
                quantity: num,
              })
            }}
            className="w-full md:w-[20vw] h-14 bg-yellow-300 hover:bg-yellow-400 text-black font-bold rounded-xl mt-8 text-lg md:text-2xl">
            ADD TO CART
          </button>

          <div className="mt-8 space-y-5">

            <p className="flex items-center gap-3 text-sm md:text-lg font-semibold">
              <Package size={25} strokeWidth={1.5} />
              Free Delivery
            </p>

            <p className="flex items-center gap-3 text-sm md:text-lg font-semibold">
              <Undo2 size={25} strokeWidth={1.5} />
              7 - 8 Days Easy Return
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail