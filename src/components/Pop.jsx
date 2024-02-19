import React from 'react'
import close from "../assets/close.png"

export default function Pop({pop,handleClick}) {
  return (
    <>
    {pop && <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='rounded-md duration-300 w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold ml-1'>Order Now</h1>
                    <div>
                        <img onClick={()=>{handleClick()}} className='w-4 cursor-pointer' src={close} alt="close" />
                    </div>
                </div>
                <div>
                    <input type="text" placeholder='Name' className='form-input mt-4' />
                    <input type="text" placeholder='Email' className='form-input' />
                    <input type="text" placeholder='Address' className='form-input' />
                    <div className='flex justify-center'>
                        <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full bg-primary text-white'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>}
    
    </>
  )
}
