import React from 'react'
import location from "../assets/location.png"
import phone from "../assets/phone.png"


export default function Footer() {
  return (
    <div>
        <div className='container'>
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                <div className='py-8 px-4'>
                    <a className='text-primary uppercase text-2xl sm:text-3xl tracking-widest font-semibold' href='#'>eshop</a>
                    <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sint laboriosam deserunt soluta rerum quidem, et beatae incidunt cupiditate dignissimos totam, quaerat maxime, suscipit unde maiores!</p>
                </div>
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/'>Home</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/about'>About</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/contact'>Contact</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/blog'>Blog</a></li>
                        </ul>
                    </div>

                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/'>Home</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/about'>About</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/contact'>Contact</a></li>
                            <li><a  className="text-gray-600 hover:text-black duration-300" href='/blog'>Blog</a></li>
                        </ul>
                    </div>
                    <div className='py-8 px-4 col-span-2 sm:col-auto space-y-3'>
                        <div className='flex items-center gap-3'>
                            <img className='w-5' src={location} alt="location" />
                            <p>Mannarkkad , Kerala</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <img  className='w-5'src={phone} alt="phone" />
                            <p>+91 123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
