import React from 'react'
import { useNavigate } from 'react-router-dom'
import search from "../assets/search.png"
import cart from "../assets/cart.png"
import drop from "../assets/dropdown.svg"

export default function Navbar({handleClick}) {

    const navigate = useNavigate()

    const dropdown = [
        {
            id:1,
            name:"Trending products",
            link:"/TrendingProducts"
        },
        {
            id:2,
            name:"Best selling",
            link:"/Bestselling"
        },
        {
            id:3,
            name:"Top rated",
            link:"/Toprated"
        }
    ]


  return (
    <div className='bg-white  duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                <div className='flex items-center gap-4'>
                    <a className='text-primary uppercase text-2xl sm:text-3xl tracking-widest font-semibold' href='#'>eshop</a>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <a onClick={()=>{navigate("/")}} className=' text-xl font-bold text-gray-500 hover:text-black duration-200 px-3' href="/home" >Home</a>
                            </li>
                            <li>
                                <a onClick={()=>{navigate("/shop")}} className=' text-xl font-bold text-gray-500 hover:text-black duration-200 px-3' href="/shop" >Shop</a>
                            </li>
                            <li>
                                <a onClick={()=>{navigate("/about")}} className=' text-xl font-bold text-gray-500 hover:text-black duration-200 px-3' href="/about" >About</a>
                            </li>
                            <li>
                                <a onClick={()=>{navigate("/blog")}} className=' text-xl font-bold text-gray-500 hover:text-black duration-200 px-3' href="/blog" >Blog</a>
                            </li>
                            <li className='relative cursor-pointer group'>
                                <a className='font-bold text-xl text-gray-500 flex justify-between items-center gap-2 hover:text-black' href='/'>Quick Links<span><img className='w-3 hover:rotate-180 duration-300' src={drop} alt="arrow" /></span></a>
                                <div className='absolute hidden group-hover:block w-[150px] shadow-md rounded-md bg-white'>
                                    <ul className='space-y-2'>
                                        {dropdown.map((item,index)=>{
                                            return(
                                                <li className='p-1' key={index}>
                                                    <a className='text-gray-500 hover:text-black rounded-md px-1 duration-200' href={item.link}>{item.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='group relative hidden sm:block'>
                        <input className='search-bar' type="text" placeholder='search' />
                        <img className='w-5 absolute top-0  translate-y-1/2 right-3' src={search} alt="search" />
                    </div>
                    <button className='relative p-3' onClick={()=>{handleClick()}}>
                        <img className='w-5' src={cart} alt="cart" />
                        <div className='w-4 h-4 absolute rounded-full bg-red-500 text-white top-0 right-0 flex items-center justify-center text-xs'>
                            4
                        </div>
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}
