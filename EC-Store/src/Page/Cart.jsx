import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-12">

      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Shopping Cart
        </h1>

        <p className="text-gray-500 mt-2">
          {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {cart.length === 0 ? (

      
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Looks like you haven't added anything yet.
          </p>

         <Link
            to="/" className="mt-6 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800">
             Continue Shopping
          </Link>
        </div>

      ) : (

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">

            {cart.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-5 mb-5 flex gap-6 shadow-sm" >
                 <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-32 object-cover rounded-xl" />

                <div className="flex flex-1 justify-between">

                  <div>
                    <p className="text-sm text-gray-500 uppercase font-medium">
                      {item.Brand}
                    </p>
                    <h2 className="text-xl font-semibold mt-1">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 mt-2">
                      Size: <span className="font-medium text-black">
                        {item.size}
                      </span>
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <button
                        onClick={() =>
                          updateQuantity(index, item.quantity - 1)
                        }
                        className="h-9 w-9 border border-gray-300 rounded-full hover:bg-gray-100" > − </button>
                      <span className="font-semibold w-5 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(index, item.quantity + 1)
                        }
                        className="h-9 w-9 border border-gray-300 rounded-full hover:bg-gray-100"  >  + </button>

                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-sm text-red-500 mt-5 hover:text-red-700">
                      Remove
                    </button>

                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">
                      ₹{item.price * item.quantity}
                    </p>

                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-400 mt-1">
                        ₹{item.price} each
                      </p>
                    )}
                  </div>
                </div>
              </div>

            ))}
          </div>
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-2xl p-7 shadow-sm sticky top-6">
              <h2 className="text-2xl font-bold mb-7">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600 mt-4">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">
                  FREE
                </span>
              </div>

              <div className="border-t my-6"></div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{subTotal}</span>
              </div>
             <Link
                 to="/checkout"
                 className="block text-center w-full mt-7 bg-black text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition">
                   Proceed to Checkout
                </Link>
              <p className="text-center text-xs text-gray-400 mt-4">
                Secure checkout • Easy returns
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;