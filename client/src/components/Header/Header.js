import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import logo from '../../data/logo.PNG'
import Cart from '../Cart'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const [open, setOpen] = useState(false)

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
<nav className="bg-slate-700/70 fixed border-gray-200 w-full top-0 z-30 text-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <Link to='/'><img src={logo} alt='' className='h-10 hover:cursor-pointer' /></Link>
   <div className='rounded-md'>
          <input type='text' placeholder='Search' className='p-1 w-24 sm:w-36 sm:p-2 text-black rounded-md'/>
    </div>

    
    <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-2 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-2 md:mt-0">
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/airquality'>Air Quality</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/community'>Community</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/airpurifier'>Air Purifiers</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/business'>Business</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/facemask'>Mask</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/news'>News</Link></li>
      <li className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md'><Link to='/support'>Support</Link></li>
      </ul>
    </div>
    <div className='bg-orange-500 rounded-md p-2'>
           <button>Login</button>
         </div>
         <div className='hover:cursor-pointer' onClick={()=>setShowCart((state)=>!state)}>
           <AiOutlineShoppingCart size={24}/>
         </div>
         <div onClick={()=>setOpen(!open)} className='lg:hidden hover:cursor-pointer'>
    <FiMenu size={24}/>
    </div>
  </div>
  
</nav>
{showCart && <Cart setShowCart={setShowCart}/>}
{open &&
      <div className='flex flex-col mt-8 z-40 right-4 p-2 rounded-md bg-slate-600 fixed text-white lg:hidden'>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/airquality'>Air Quality</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/community'>Community</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/airpurifier'>Air Purifiers</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/business'>Business</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/facemask'>Mask</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/news'>News</Link></span>
      <span className='hover:cursor-pointer hover:bg-slate-600 hover:text-blue-500 p-2 rounded-md' onClick={()=>setOpen(false)}><Link to='/support'>Support</Link></span>
      </div>
    }
 </>

  )
}

export default Header