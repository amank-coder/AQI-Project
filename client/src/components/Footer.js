import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa"

import india from './../data/india.PNG'
import logo from './../data/logo.PNG'

const Footer = () => {
  return (
    <div className='w-100% h-800px mb-0'>
       
        <div className="h-300px pb-10 flex items-center justify-center bg-slate-200">
            <div className="flex-col items-center justify-center">
                  <div className="mb-3 ml-8 text-2xl font-bold mt-4">Connect with AQI</div>
                  <div className="mb-3 ml-8 font-medium">Sign up for our newsletter</div>
                  <div className='mb-8 flex gap-3'>
                      <input type="text" placeholder="Email Address" />
                      <button className='bg-orange-600 p-1 rounded-md'>Subscribe</button>
                  </div>    
            </div>
        </div>
        
        <div className='w-100% bg-slate-300 pt-10'>
          <div className="flex justify-between pb-5">
              <div className='flex px-50 py-30 gap-20 ml-20'>
              <div className='text-4xl underline'>
                <img src={logo} alt='' className='h-10'/>
              </div>
                <div className="flex-col leading-7">
                    <div className='font-bold pb-2'>Inside AQI</div>
                    <div className='hover:cursor-pointer hover:text-red-600'>About Us</div>
                    <div className='hover:cursor-pointer hover:text-red-600'>Contact</div>
                </div>
                <div className="flex-col leading-7">
                    <div className="font-bold pb-2">Media</div>
                    <div className='hover:cursor-pointer hover:text-red-600'>Newsroom</div>
                    <div className='hover:cursor-pointer hover:text-red-600'>Press releases</div>
                    <div className='hover:cursor-pointer hover:text-red-600'>Media Contact</div>
                </div>
              </div>
                
              <div className="flex flex-col md:flex-row justify-center gap-5 mb-8 mr-10">
                    <div className="icon hover:cursor-pointer hover:text-red-600">
                        <FaFacebookF size={24} />
                    </div>
                    <div className="icon hover:cursor-pointer hover:text-red-600">
                        <FaTwitter size={24} />
                    </div>
                    <div className="icon hover:cursor-pointer hover:text-red-600">
                        <FaInstagram size={24} />
                    </div>
                    <div className="icon hover:cursor-pointer hover:text-red-600">
                        <FaLinkedinIn size={24} />
                    </div>
              </div>
          </div> 
          <div className='border-t-2 border-t-zinc-800 flex justify-between'>
                <div className="w-10 h-15 ml-30">
                  <img src={india} />     
                </div>
                <div className='flex gap-8 pr-20'>
                  <span className='hover:cursor-pointer hover:font-semibold'>Terms of Use</span>
                  <span className='hover:cursor-pointer hover:font-semibold'>Terms of Sale</span>
                  <span className='hover:cursor-pointer hover:font-semibold'>Privacy Policy</span>
                </div>
          </div>
      
        </div>       
    </div>
  )
}

export default Footer