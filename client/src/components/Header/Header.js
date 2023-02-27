import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../../data/logo.PNG'

export const Header = () => {
  return (
    <div className='flex justify-around items-center w-100% h-50px p-2 text-white bg-slate-700'>
        <div className='text-4xl underline'>
          <img src={logo} alt='' className='h-10'/>
        </div>
        <div className='rounded-md'>
          <input type='text' placeholder='Search' className='p-1 rounded-md'/>
        </div>
        <div className='flex'>
          <ul className='flex gap-5'>
            <li>Air Quality</li>
            <li>Community</li>
            <li>Air Purifiers</li>
            <li>Mask</li>
            <li>Business</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>
        <div className='bg-orange-500 rounded-md p-2'>
          <button>Login</button>
        </div>
        <div>
          <AiOutlineShoppingCart size={24}/>
        </div>
    </div>
  )
}

export default Header