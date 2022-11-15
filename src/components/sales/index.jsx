import React, {useState, useEffect} from 'react';
// import {useState, useEffect} from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";

import Image1 from "../../assets/images/CH2 1.png"

const Sales = () => {

    const handleSales = () => {
        console.log("sales")
    }


    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "December, 31, 2022";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
    
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
      }, []);











  return (
    <div className="w-[100%] h-full flex overflow-hidden mb-24 ">
        <div className="w-[100%] h-full flex flex-col flex-nowrap content-center">
            
            <div className="4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-around content-center items-center">
                
                <div className="4xs:w-full 4xs:pl-12 sm:w-[50%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start">
                    <h1 className="text-4xl font-semibold ">
                        Our Annual Sales
                        &nbsp;
                        <span className="text-[red]">75% Off</span>
                    </h1>
                    <p className="w-[80%] flex mt-6 text-gray-900 mb-12"> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ab necessitatibus 
                        cumque delectus odit, possimus dicta aperiam aliquam? 
                    </p>


                    <div>Implement Timer</div>



                    <div className=" w-[50%] flex flex-row justify-between items-center content-center text-3xl text-rose-600 " role="timer">
                        <div className="col-4">
                            <div className="box">
                                <p className="font-bold" id="day">{days < 10 ? "0" + days : days}</p>
                                <span className="text-base">Days</span>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="box">
                            <p className="font-bold" id="hour">{hours < 10 ? "0" + hours : hours}</p>
                            <span className="text-base">Hours</span>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="box">
                            <p className="font-bold" id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                            <span className="text-base">Minutes</span>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="box">
                            <p className="font-bold" id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                            <span className="text-base">Seconds</span>
                            </div>
                        </div>
                    </div>

                    
                    <button onClick={()=> handleSales()} className="mt-12 border-2 border-black py-2 px-4 bg-black text-white transform transition duration-500 hover:bg-white hover:text-black hover:scale-90 ">
                        <span className="inline-flex items-center"> 
                            SHOP NOW
                            <BsArrowRight className="ml-2" />
                        </span>
                    </button>
                </div>

                <div className="w-[100%] sm:w-[50%] flex justify-center sm:justify-end" >
                    <img src={Image1} alt="sales" />
                </div>
            </div>



        

        </div>
    </div>
  )
}

export default Sales;