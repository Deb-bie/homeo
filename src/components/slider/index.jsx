import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import SliderData from "../../data/sliderData.js"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime )
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    // useEffect(() => {
    //     if (autoScroll) {
    //         auto()
    //     }
    //     return () => clearInterval(slideInterval);
    // }, [currentSlide])




  return (
    <div className="flex flex-row items-center w-full bg-teal-100 pb-[50px] pt-[50px]">
        <div className="flex flex-row items-center justify-between h-full w-full" >
            <div className="flex justify-center" onClick={() => prevSlide()}>
                <FiChevronLeft />
            </div>

            <div className="flex justify-center absolute right-0 " onClick={()=> nextSlide()} >
                <FiChevronRight />
            </div>

            {
                SliderData.map((slide, i) => {
                    return (
                        <div className={i === currentSlide ? "flex justify-between md:px-12 4xs:px-0 4xs:overflow-hidden" : "hidden" }  key={i}>
                            {
                                i === currentSlide 
                                ? 
                                    <div className="flex flex-row flex-nowrap w-full h-full items-center justify-between overflow-hidden ">
                                        <div className="flex flex-col items-start text-start justify-start w-[50%] h-full ">
                                            <h5 className="flex flex-col flex-wrap text-lg font-bold text-rose-500">{slide.subtitle}</h5>
                                            <br />
                                            <h1 className="flex flex-col flex-wrap text-2xl lg:text-6xl font-black text-black">{slide.title}</h1>
                                            <br />
                                            <p className="flex flex-col flex-wrap text-base  w-[80%]">{slide.desc}</p>
                                            <br />
                                            <button className=" bg-black text-white px-8 py-4 ">SHOP NOW</button>
                                        </div>
                    
                                        <div className="flex items-center content-center flex-nowrap justify-end w-[100%] right-0 4xs:-right-[190%] sm:-right-[10%] lg:right-0 overflow-hidden h-full ">
                                            <div className=" sm:w-auto 4xs:h-auto sm:h-[350px] object-contain overflow-hidden">
                                                <img src={slide.image} className="w-full h-full overflow-hidden " />
                                            </div> 
                                        </div>
                                    </div>
                                : ""
                            }
                        </div>
                    )
                })
            }


        </div>
    </div>
  )
}

export default Slider;