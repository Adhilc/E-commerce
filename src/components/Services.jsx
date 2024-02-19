import React from 'react'
import carlogo from "../assets/carlogo.svg"
import headphonelogo from "../assets/headphonelogo.svg"
import tick from "../assets/tick.svg"
import wallet from "../assets/wallet.svg"

export default function Services() {

const serviceData = [
    {
        id:1,
        icon:carlogo,
        title:"Free shipping",
        describe:"Free Shipping On All Order"
    },
    {
        id:2,
        icon:tick,
        title:"Safe Money",
        describe:"30 Days Money Back"
    },
    {
        id:3,
        icon:wallet,
        title:"Secure Payment",
        describe:"All Payment Secure"
    },
    {
        id:4,
        icon:headphonelogo,
        title:"Online Support 24/7",
        describe:"Technical Support 24/7"
    }
]

const elements = serviceData.map((item)=>(
    <div key={item.id} className='flex flex-col items-center sm:flex-row gap-4'>
        <img className='w-9' src={item.icon} alt="" />
        <div>
            <h1 className='font-bold lg:text-xl '>{item.title}</h1>
            <h1 className='text-gray-400 text-sm'>{item.describe}</h1>
        </div>
    </div>
))

  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {elements}
            </div>
        </div>
    </div>
  )
}
