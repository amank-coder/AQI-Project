import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../../data/logo.PNG'
import Cart from '../Cart'
import { useState } from 'react'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
    <div className='flex justify-around items-center w-full h-50px p-2 text-white bg-slate-700/70 fixed top-0 z-30'>
        <div className='text-4xl underline'>
          <img src={logo} alt='' className='h-10 hover:cursor-pointer'/>
        </div>
        <div className='rounded-md'>
          <input type='text' placeholder='Search' className='p-2 text-black rounded-md'/>
        </div>
        <div className='flex'>
          <ul className='flex gap-5'>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Quality</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Community</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Purifiers</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Mask</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Business</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>News</li>
            <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Support</li>
          </ul>
        </div>
        <div className='bg-orange-500 rounded-md p-2'>
          <button>Login</button>
        </div>
        <div className='hover:cursor-pointer' onClick={()=>setShowCart((state)=>!state)}>
          <AiOutlineShoppingCart size={24}/>
        </div>
    </div>
    {showCart && <Cart setShowCart={setShowCart}/>}
    </>
  )
}

export default Header