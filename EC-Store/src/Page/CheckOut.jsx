import React, { useState } from "react";

const Checkout = () => {

   const [formData, setFormData] = useState({
    name:"",
    mobile:"",
    address:"",
    city:"",
    pincode:""
   })

   const handleChange = (e) =>{
    setFormData({...formData , [e.target.name]: e.target.value})
   }
     const placeOrder = () => {
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      alert("Please fill in all the required fields");
      return;
    }

    alert("Order Placed Successfully!");

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-12">

      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="max-w-4xl">

        <div className="bg-white p-7 rounded-2xl shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Delivery Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
               value={formData.name}
                onChange={handleChange}
              className="border p-4 rounded-xl outline-none"  />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
               value={formData.mobile}
                 onChange={handleChange}
              className="border p-4 rounded-xl outline-none"  />

            <input
              type="text"
              name="address"
              placeholder="Address"
               value={formData.address}
               onChange={handleChange}
              className="border p-4 rounded-xl outline-none md:col-span-2" />

            <input
              type="text"
              name="city"
              placeholder="City"
               value={formData.city}
              onChange={handleChange}
              className="border p-4 rounded-xl outline-none"  />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
               value={formData.pincode}
               onChange={handleChange}
              className="border p-4 rounded-xl outline-none" />

          </div>

          <button
             onClick={placeOrder}
             className="mt-8 bg-black text-white px-8 py-4 rounded-xl font-semibold"  >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
};

export default Checkout