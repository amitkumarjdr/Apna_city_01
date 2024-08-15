
// import { IndianRupee, KeyRound, Send, Shrink } from "lucide-react"
import { faIndianRupeeSign, faKey, faMinimize, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import villaImage from "../images/Rectangle 681.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import buildingImg from "../images/Group 2282.png";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Villa({ text }) {
  return (
    <div className="sm:flex justify-between lg:container mx-auto  lg:pt-16 pt-7 ">
      <div className="md:basis-[60%] sm:basis-[50%] lg:h-[496px] md:h-[396px] sm:h-[296px] h-[200px] rounded-tl-[9px] overflow-hidden">
        <img className="w-full h-full  " src={villaImage} alt="" />
      </div>
      <div className="md:basis-[40%] sm:basis-[50%] shadow-[0px_0px_4px_2px_#00000040]  hover:shadow-[0px_76px_76px_0px_#00000017]  rounded-r-[9px] flex flex-col justify-between lg:py-9 ps-8 pe-3">
        <div className='lg:space-y-4 space-y-2 '>
          <div className=' py-1 flex justify-between items-center border-b-[#CCCCCC]'>
            <p className='text-[#276658] capitalize lg:text-[25px] md:text-[18px] sm:text[16px]  font-[700] '>
              plot for {text}
            </p>
            <div>
              <div className='flex  justify-center items-center lg:gap-1 '>
                <div className='xl:w-auto xl:h-auto size-[10px]'>
                  <img src={buildingImg} alt="" />
                </div>
                <p className='lg:text-[20px] md:text-[15px] sm:text-[12px] text-[11px] text-[#515151] font-[700] '>
                  300
                </p>
              </div>
              <p className="text-[12px]  text-[#09644E] text-center">
                Total plot
              </p>
            </div>
          </div>
          <p className='flex  xl:text-[18px] md:text-[13px] sm:text-[11px] text-[10px] text-[#404348] font-[600]'>
            <FontAwesomeIcon icon={faIndianRupeeSign} />  Start From 20 lakh
          </p>
          <p className='flex xl:text-[18px] md:text-[13px] sm:text-[11px] text-[10px]  text-[#404348] font-[600] text-nowrap '>
            <FontAwesomeIcon icon={faMinimize} />  100/120/150/sq.yards
          </p>

          <p className='flex xl:text-[18px] md:text-[13px] sm:text-[11px] text-[10px]  text-[#404348] font-[600] '>
            <FontAwesomeIcon icon={faKey} />  Under CONSTRUCTION
          </p>

        </div>
        <div className="text-[#09644E] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] font-[700] relative ">
          <span className=" after:absolute after:w-[68%] after:h-[1px] after:right-0 after:bottom-1 after:bg-[#CCCCCC] ">
            Size & Dimension
          </span>
        </div>
        <div className="grid grid-cols-4 lg:gap-4 gap-1">
          {
            [1, 2, 3, 4, 5, 6, 7].map(() => (
              <div className="lg:text-[14px] md:text-[12px] text-[10px] font-[600] border-[.5px] rounded-[5px] border-[#D1D1D1] text-center">
                <p className="text-[#2D2E2F] ">
                  80 Sq. Yards
                </p>
                <p className=" text-[#09644E] ">
                  50x100
                </p>
              </div>
            ))
          }

        </div>
        <div className=' flex lg:text-[17px] md:text-[15px] sm;text-[12px] text-[10px] gap-4 py-2'>
          <p className=' bg-[#09644E] text-white  lg:px-3 px-2  flex justify-center items-center lg:gap-3 gap-2'>
            <FontAwesomeIcon icon={faPaperPlane} /> Enquire now
          </p>
          <button className='bg-white border border-[#09644E]  lg:px-3 px-2 lg:gap-3 gap-2 py-[2px] flex justify-between items-center'>
          <FontAwesomeIcon icon={faWhatsapp} />
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  )
}
// box-shadow: 0px 76px 76px 0px #00000017;

// box-shadow: 0px 0px 4px 2px #00000040;
