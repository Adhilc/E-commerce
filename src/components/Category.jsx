import React from 'react'
import airpods from "../assets/airpods.png"
import watch from "../assets/watch.png"
import iphone from "../assets/iphone.png"
import slr from "../assets/slr.png"
import xbox from "../assets/xbox.png"
import headset from "../assets/headset.png"


export default function Category() {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                
                <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Airpods</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-black'>Browse</button>
                        </div>
                    <img className='w-[320px] absolute  top-0 right-4 md:bottom-0 ' src={airpods} alt="airpods" />
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-green-950 to-green-950/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>Gadget</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-green-950'>Browse</button>
                        </div>
                    <img className='w-[220px] absolute top-0 right-0' src={watch} alt="watch" />
                </div>
                <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-blue-400 to-blue-400/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>iphone</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-blue-400'>Browse</button>
                        </div>
                    <img className='w-[320px] absolute top-0 traslate-y-1/2 -right-0' src={iphone} alt="iphone" />
                </div>
                <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-brandyellow to-brandyellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>Moments</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-brandyellow'>Browse</button>
                        </div>
                    <img className='w-[320px] absolute top-0 traslate-y-1/2 -right-0' src={slr} alt="iphone" />
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>Music</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-green-950'>Browse</button>
                        </div>
                    <img className='w-[220px] absolute top-0 right-0' src={headset} alt="watch" />
                </div>
                <div className='py-10 pl-5 bg-gradient-to-br from-primary to-primary text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>Games</p>
                            <button className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-white text-primary'>Browse</button>
                        </div>
                    <img className='w-[200px] absolute top-0 right-1' src={xbox} alt="watch" />
                </div>

            </div>
        </div>
    </div>
  )
}
