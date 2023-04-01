import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../../data/logo.PNG'
import Cart from '../Cart'
import { useState } from 'react'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)

  return (
    // <>
    // <div className='flex justify-around items-center w-full h-50px p-2 text-white bg-slate-700/70 fixed top-0 z-30'>
    //     <div className='text-4xl underline'>
    //       <img src={logo} alt='' className='h-10 hover:cursor-pointer'/>
    //     </div>
    //     <div className='rounded-md'>
    //       <input type='text' placeholder='Search' className='p-2 text-black rounded-md'/>
    //     </div>
    //     <div className='flex'>
    //       <ul className='flex gap-5'>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Quality</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Community</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Purifiers</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Mask</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Business</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>News</li>
    //         <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Support</li>
    //       </ul>
    //     </div>
    //     <div className='bg-orange-500 rounded-md p-2'>
    //       <button>Login</button>
    //     </div>
    //     <div className='hover:cursor-pointer' onClick={()=>setShowCart((state)=>!state)}>
    //       <AiOutlineShoppingCart size={24}/>
    //     </div>
    // </div>
    // {showCart && <Cart setShowCart={setShowCart}/>}
    // </>
  <>  
<nav class="bg-slate-700/70 fixed border-gray-200 w-full top-0 z-30 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <img src={logo} alt='' className='h-10 hover:cursor-pointer'/>
   <div className='rounded-md'>
          <input type='text' placeholder='Search' className='p-1 w-24 sm:w-36 sm:p-2 text-black rounded-md'/>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-2 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-2 md:mt-0">
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Quality</li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Community</li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Air Purifiers</li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Business</li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'>Mask</li>
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
</nav>
{showCart && <Cart setShowCart={setShowCart}/>}
 </>

  )
}

export default Header