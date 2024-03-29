import React from 'react'

export default function Banner({data}) {


  return (
    <div className='flex min-h-[550px] justify-center items-center py-12'>
        <div  className='container'>
            <div style={{backgroundColor:data.bgColor}} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                <div className='p-6 sm:p-8'>
                    <p data-aos="slide-right" className='text-sm'>{data.discount}</p>
                    <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                    <p data-aos="fade-up" className='text-sm'>{data.date}</p>
                </div>
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img className='scale-125 w-[250px] md:w-[370px] mx-auto drop-shadow-xl object-cover' src={data.image} alt="banner" />
                </div>
                <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
                    <p data-aos="zoom-out" className='font-bold text-xl'>{data.title2}</p>
                    <p data-aos="fade-up" className='text-3xl sm:text-5xl font-bold' >{data.title3}</p>
                    <p data-aos="fade-up" className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <button data-aos="fade-up" data-aos-offset="0" className=' text-white py-2 px-4 cursor-pointer hover:scale-105 duration-300 rounded-full hover:bg-white hover:text-black'>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
