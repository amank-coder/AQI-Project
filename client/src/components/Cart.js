import React from 'react'
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'

const Cart = ({setShowCart}) => {
  return (
    <div className='w-full justify-end fixed top-0 left-0 h-full z-40'>
      <div className="h-full w-full bg-black opacity-50 absolute" onClick={() => setShowCart(false)}></div>
       <div className='h-full w-1/3 bg-white z-1 absolute left-1/3 translate-x-full flex flex-col z-50 p-5'>
        <div className="flex justify-end pt-5 items-center border-gray-700">
                    <span className="text-2xl  mr-24 font-bold uppercase text-black">Shopping Cart</span>
                    <span className="flex items-center gap-1 absolute top-5 right-3" onClick={() => setShowCart(false)}>
                        <MdClose className="hover:cursor-pointer" />
                        <span className="text">close</span>
                    </span>
        </div>
        <div className="flex flex-col items-center gap-20 mt-24">
                        <BsCartX size={36} className="text-slate-400"/>
                        <span>No products in the cart.</span>
        </div>
        <div className="absolute bottom-12">
                            <div className="mb-4 border-gray-300 border-t-2">
                                <span className="pr-4">Subtotal:</span>
                                <span>
                                    0.00
                                </span>
                            </div>
                            <div className="bg-blue-700 rounded-md w-20 flex ml-40 p-2 text-white">
                                <button>                                
                                    Checkout
                                </button>
                            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart