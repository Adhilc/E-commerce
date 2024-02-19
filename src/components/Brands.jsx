import React from 'react'
import lenevo from "../assets/lenevo.png"
import apple from "../assets/apple.png"
import ps4 from "../assets/ps4.png"
import sony from "../assets/sony.png"
import samsung from "../assets/samsung.png"


export default function Brands() {
  return (
    <div data-aos="zoom-out" className='hidden md:block bg-gray-200'>
        <div className='container'>
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img className='w-[80px]' src={lenevo} alt="lenevo" />
                <img className='w-[50px]' src={apple} alt="apple" />
                <img className='w-[80px]' src={ps4} alt="ps4" />
                <img className='w-[80px]' src={sony} alt="sony" />
                <img className='w-[80px]' src={samsung} alt="samsung" />
            </div>
        </div>
    </div>
  )
}
