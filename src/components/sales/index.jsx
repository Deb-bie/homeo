import React from 'react'
import { BsArrowRight } from "react-icons/bs";

import Image1 from "../../assets/images/CH2 1.png"

const Sales = () => {

    const handleSales = () => {
        console.log("sales")
    }

  return (
    <div className="w-[100%] h-full flex overflow-hidden mb-24 ">
        <div className="w-[100%] h-full flex flex-col flex-nowrap content-center">
            
            <div className="4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-around content-center items-center">
                
                <div className="4xs:w-full 4xs:pl-12 sm:w-[50%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start">
                    <h1 className="text-4xl font-semibold ">
                        Our Annual Sales
                        &nbsp;
                        <span className="text-[red]">75% OFF</span>
                    </h1>
                    <p className="w-[80%] flex mt-6 text-gray-900 mb-12"> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ab necessitatibus 
                        cumque delectus odit, possimus dicta aperiam aliquam? 
                    </p>
                    <div>Implement Timer</div>
                    
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




            
            {/* <div className="p-8 sm:p-0 flex flex-col flex-wrap justify-items-stretch sm:justify-start content-center items-stretch sm:items-start w-[100%] sm:w-[50%] ">
                <h1 className="text-4xl font-semibold ">
                    Our Annual Sales
                    &nbsp;
                    <span className="text-[red]">75% OFF</span>
                </h1>
                <p className="sm:w-[70%] flex mt-6 text-gray-900 mb-12"> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ab necessitatibus 
                    cumque delectus odit, possimus dicta aperiam aliquam? 
                </p>
                <div>Implement Timer</div>
                
                <button onClick={()=> handleSales()} className="mt-12 border-2 border-black py-2 px-4 bg-black text-white transform transition duration-500 hover:bg-white hover:text-black hover:scale-90 ">
                    <span className="inline-flex items-center"> 
                        SHOP NOW
                        <BsArrowRight className="ml-2" />
                    </span>
                </button>
            </div> */}


        </div>
    </div>
  )
}

export default Sales;