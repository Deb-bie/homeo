import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {useNavigate} from "react-router-dom";

import SliderData from "../../data/sliderData.js"
import "./slider.css"

const Slider = () => {
    const navigate = useNavigate()

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

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide, autoScroll, slideInterval])


  return (
    <div className="flex flex-row items-center w-full  pb-[50px] pt-[50px]">
        <div className="flex flex-row items-center justify-between h-full w-full" >
            <div className="flex justify-center absolute left-0 z-30" onClick={() => prevSlide()}>
                <FiChevronLeft />
            </div>

            <div className="flex justify-center absolute right-0 z-30 " onClick={()=> nextSlide()} >
                <FiChevronRight />
            </div>

            {
                SliderData.map((slide, i) => {
                    return (
                        <div className={i === currentSlide ? "w-[100%] flex justify-between md:px-12 4xs:px-0 4xs:overflow-hidden" : "hidden" }  key={i}>
                            {
                                i === currentSlide 
                                ? 
                                    <div className="relative flex flex-row flex-nowrap w-full h-full items-center justify-between overflow-hidden ">
                                        <div className="head relative flex flex-col items-start text-start justify-start 4xs:w-[100%] 2xs:w-[60%] xs:w-[50%] z-20 px-6 ">
                                            <h5 className="ani1 slide-up flex flex-col flex-wrap text-lg font-bold text-rose-500">{slide.subtitle}</h5>
                                            <br />
                                            <h1 className="ani2 slide-up flex flex-col flex-wrap text-2xl lg:text-6xl font-black text-black">{slide.title}</h1>
                                            <br />
                                            <p className="ani3 slide-up flex flex-col flex-wrap text-base  w-[80%]">{slide.desc}</p>
                                            <br />
                                            <div className="ani4">
                                                <button onClick={()=>navigate("/")} className=" bg-black text-white px-8 py-4 ">SHOP NOW</button>
                                            </div>

                                        </div>

                                        <div className="absolute flex items-center content-center flex-nowrap justify-end w-[100%] h-full 4xs:-right-[30px] sm:right-0 ">
                                            <div className="w-[500px] h-auto ">
                                                <img src={slide.image} className="w-full h-full object-contain" alt="slider"/>
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