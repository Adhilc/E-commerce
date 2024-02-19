import React from 'react'
import watchblog from "../assets/watchblog.jpg"
import melina from "../assets/melina.jpg"
import vrblog from "../assets/vrblog.jpg"

export default function Cards() {
  return (
    <div className='my-12'>
        <div className='container'>
            <div className='flex justify-between flex-col items-center'>
                <h1 className='font-bold text-black text-2xl'>Recent News</h1>
                <p className='text-gray-500 text-sm'>Explore Our Blogs</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 mt-5'>
                <div  data-aos="fade-up" data-aos-delay="0" className='flex flex-col'>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                    <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={watchblog} alt="watchblog" />
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Jan 20, 2024 by Dilshad</p>
                        <h3 className='font-bold line-clamp-1'>How to choose perfect smartwatch</h3>
                        <p className='line-clamp-2 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet nostrum molestiae eum.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col'>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                    <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={melina} alt="watchblog" />
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Jan 20, 2024 by Melina</p>
                        <h3 className='font-bold line-clamp-1'>How to choose perfect gadget</h3>
                        <p className='line-clamp-2 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet nostrum molestiae eum.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col'>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                    <img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={vrblog} alt="watchblog" />
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Jan 20, 2024 by Jhon</p>
                        <h3 className='font-bold line-clamp-1'>How to choose perfect VR headset</h3>
                        <p className='line-clamp-2 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet nostrum molestiae eum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
