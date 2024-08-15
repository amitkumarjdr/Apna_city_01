
import testimonialBgImg from "../images/Rectangle 2223.png";
import personImg from "../images/Ellipse 34.png"
import personImg2 from "../images/Rectangle 2222.png"
import { useState } from "react";

export default function Testimonial() {

    const [image, setImage] = useState(personImg)

    const changeSrc = (e)=>{
        setImage(e.target.src)
    }

    return (
        <div className="bg-cover py-9" style={{ backgroundImage: `url(${testimonialBgImg})` }}>
            <div className='relative sm:pt-[50px] '>
                <h1 className="mb-4 text-4xl text-center uppercase text-white font-[700] md:text-5xl lg:text-[50px] after:absolute after:w-[22%] after:h-[2px] after:bg-white sm:after:top-[28%] after:top-[12%] after:left-[38%] " data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                    Clients Testimonial
                </h1>
                <p className="mb-7  sm:mt-16 text-lg text-center font-normal text-white lg:text-[20px] sm:px-16 lg:px-[400px] dark:text-gray-400" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the
                    1500s, when an unknown
                </p>
                <div className="w-[134px] mx-auto text-center">
                    <div className="lg:size-[134px] rounded-full overflow-hidden " data-aos="zoom-in" data-aos-duration="700" data-aos-once="true">
                        <img className="w-full h-full " src={image} alt="" />
                    </div>
                    <p className="text-[18px] text-white font-[600] py-2">
                        kalavati
                    </p>
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden left-[18%] top-[55%] md:top-[48%] lg:top-[15%] lg:left-[18%] " onClick={changeSrc} data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg2} alt="" / >
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden left-[8%] top-[75%] md:top-[67%] lg:top-[45%] lg:left-[7%] "  onClick={changeSrc} data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg} alt="" />
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden left-[20%] top-[98%] md:top-[88%] lg:top-[75%] lg:left-[18%] "  onClick={changeSrc} data-aos="zoom-in" data-aos-duration="700" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg} alt="" />
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden right-[18%] top-[55%] md:top-[48%] lg:top-[15%] lg:right-[18%] "  onClick={changeSrc} data-aos="zoom-in" data-aos-duration="800" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg} alt="" />
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden right-[8%] top-[75%] md:top-[67%] lg:top-[45%] lg:right-[7%] "  onClick={changeSrc} data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg} alt="" />
                </div>
                <div className="lg:size-[100px] md:size-[80px] sm:size-[50px] size-[40px] absolute rounded-full overflow-hidden right-[20%] top-[98%] md:top-[88%] lg:top-[75%] lg:right-[18%] "  onClick={changeSrc} data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                    <img className="w-full h-full hover:scale-125 duration-1000 " src={personImg} alt="" />
                </div>

            </div>
        </div>
    )
}
