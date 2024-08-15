import banner01 from "../images/Rectangle 673.png";
import banner02 from "../images/Rectangle 653.png";
import banner03 from "../images/Rectangle 675.png";
import banner04 from "../images/Rectangle 676.png";
import { useEffect, useState } from "react";
import Heading from "./Heading";

export default function Gallery() {

  let gallerImg = [banner01, banner02, banner03, banner04]

  const [mainImg, setMainImg] = useState(1)
  const [activeImg, setActiveImg] = useState(1)

  let changeSrc = (index)=>{
    setActiveImg(index)
  }


  return (
    <div className="container mx-auto">
      <div className='relative sm:pt-[70px] pt-[20px] '>
        <h1 className="mb-4 text-4xl text-center uppercase text-[#276658] font-[700] md:text-5xl lg:text-[50px] after:absolute after:w-[22%] after:h-[2px] after:bg-[rgb(39,102,88)] sm:after:bottom-[-13%] after:bottom-[-8%] after:left-[38%] " >
          PROJECT GALLERY
        </h1>
      </div>
      <div className="w-full sm:h-[512px] h-[250px] sm:mb-6 sm:mt-16 mb-4 mt-5 overflow-hidden rounded-[20px] " >
        <img className="w-full h-full object-cover" src={gallerImg[activeImg]} alt="" />
      </div>
      <div className="grid grid-cols-4 gap-4 sm:pb-24 pb-6">
        {
          gallerImg.map((img, index) => (
            <div key={index} className={`w-auto sm:h-[139px] h-[100px] overflow-hidden rounded-[15px] ${(activeImg == index) ? " border-[3px] border-[#276658] " : ' '} `} onClick={()=>changeSrc(index)} >
              <img className="w-full h-full object-fill" src={img} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}
