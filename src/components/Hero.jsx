import React from 'react'
import Slider from 'react-slick';
import visionpro from "../assets/visionpro.png"
import laptop from "../assets/laptop.png"
import wireless from "../assets/wireless.png"


export default function Hero({handleClick}) {

    const herodata = [
        {
            id:1,
            img:visionpro,
            subtitle:"Dream with your eyes",
            title:"virtual",
            title2:"Reality"
        },
        {
            id:2,
            img:wireless,
            subtitle:"Beats Solo",
            title:"wireless",
            title2:"Headphone"
        },
        {
            id:3,
            img:laptop,
            subtitle:"Creative",
            title:"Branded",
            title2:"Laptops"
        }
    ]


    const element = herodata.map((data)=>(
        <div key={data.id}>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                    <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                    <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="500" data-aos-delay="300" >
                        <button onClick={()=>{handleClick()}} className='cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 bg-primary text-white'>Shop Now</button>
                    </div>
                </div>
                <div className='order-1 sm:order-2'>
                    <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                        <img src={data.img} alt="img" className='w-[500px] sm:w-[450px] h-[500px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-sm relative z-40'/>
                    </div>
                </div>
            </div>
        </div>
    ))

    const settings = {
        dots: true,
        arrow:false,
        cssEase:"ease-in-out",
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        PauseOnFocus:true,
        autoplaySpeed:4000,
        autoplay:true
      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {element}
            </Slider>
        </div>
        </div>
    </div>
  )
}
