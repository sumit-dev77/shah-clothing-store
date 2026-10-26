import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Men from './Page/Men'
import Women from './Page/Women'
import Kids from './Page/Kids'
import ProductDetail from './Page/ProductDetail'
import Cart from './Page/Cart'
import Checkout from './Page/CheckOut'
import SearchResults from './Page/SearchResult'
import Navbar from './Components/Navbar'
import NewIN from './Page/NewIN'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar/>
     <Routes >
      <Route path="/" element={<Home />} />
       <Route path="/men" element={<Men/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/kids" element={<Kids/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/search" element={<SearchResults/>}/>
      <Route path="/newArrival" element={<NewIN/>}/>
      </Routes> 
    </div>
  )
}

export default App
