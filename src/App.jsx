import React from 'react'
import Nav from "./components/Navbar"
import Heros from "./components/Hero"
import Categorys from './components/Category'
import Service from "./components/Services"
import Banners from "./components/Banner"
import bannerimg from "./assets/bannerimg.png"
import vrglass from "./assets/vrglass.png"
import Brand from "./components/Brands"
import Foot from "./components/Footer"
import Pops from "./components/Pop"
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./components/Cards"

function App() {
  const [pop,setPop] = React.useState(false)


  function handleClick (){
    setPop(!pop);
  }

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100
      }
    );
    AOS.refresh();
  },[])

const BannerData = [
  {
   discount:"30% OFF",
   title:"Fine Smile",
   date:"10 Jan to 28 Jan",
   image:bannerimg,
   title2:"Air Solo Bass",
   title3:"Winter Sale",
   title4:"lorem ipsum sit amet consectetur adispisicng",
   bgColor:"#f42c37" 
  },
  {
    discount:"50% OFF",
    title:"Fine Smile",
    date:"20 Jan to 30 Jan",
    image:vrglass,
    title2:"In To The World",
    title3:"Winter Sale",
    title4:"lorem ipsum sit amet consectetur adispisicng",
    bgColor:"#4b0082" 
   }
]

  return (
    <div>
      <Nav handleClick={handleClick} />
      <Heros handleClick={handleClick}/>
      <Categorys />
      <Service />
      <Banners data={BannerData[0]} />
      <Card />
      <Banners data={BannerData[1]} />
      <Brand />
      <Foot />
      <Pops pop={pop} handleClick={handleClick} />
    </div>
  )
}

export default App