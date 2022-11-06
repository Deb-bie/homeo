import React from 'react'
import {Link} from "react-router-dom"
import {MdOutlineFacebook, MdLocationPin,MdPhone} from "react-icons/md"
import {AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div className=" mb-8 w-[100%] h-full flex overflow-hidden ">
        <div className="gap-12 w-[100%] h-full flex flex-col flex-nowrap content-center justify-between">
            
            <div className="gap-8 w-[100%] h-full 4xs:px-8 sm:px-0 flex flex-row flex-wrap justify-evenly content-start items-start ">
                <div className="flex flex-col fex-nowrap justify-start content-center items-start">
                    <h2 className="text-base font-black mb-4" >Address</h2>
                    <Link to="#" className="flex items-center content-center justify-center">
                        <MdLocationPin />
                        &nbsp; &nbsp;
                        Homeo, Texas, USA
                    </Link>
                    <Link to="#" className="flex items-center content-center justify-center">
                        <MdPhone />
                        &nbsp; &nbsp;
                        +000 000 0000 00
                    </Link>
                    <span className="flex mt-4 font-bold text-xl">
                        <MdOutlineFacebook />
                        &nbsp; &nbsp;
                        <AiFillTwitterCircle />
                        &nbsp; &nbsp;
                        <AiFillInstagram />
                    </span>
                </div>

                <div className="flex flex-col fex-nowrap justify-start content-center items-start">
                    <h2 className="text-base font-black mb-4" >Help & Information</h2>
                    <Link to="#">Help & Contact Us</Link>
                    <Link to="#">Returns & Refunds</Link>
                    <Link to="#">Online Stores</Link>
                    <Link to="#">Terms & Conditions</Link>
                </div>

                <div className="flex flex-col fex-wrap justify-start content-center items-start">
                    <h2 className="text-base font-black mb-4" >About Us</h2>
                    <Link to="#">About Us</Link>
                    <Link to="#">What We Do</Link>
                    <Link to="#">FAQ Page</Link>
                    <Link to="#">Contact Us</Link>
                </div>
            </div>

            <div className="gap-8 w-[100%] 4xs:px-8 sm:px-0 h-full flex flex-row flex-wrap justify-evenly content-start items-start ">
                <div className="flex flex-row flex-wrap justify-start content-center items-start" >
                    <span>Terms & Conditions</span>
                    &nbsp; &nbsp;
                    <span>Policy</span>
                    &nbsp;&nbsp;
                    <span>Map</span>
                </div>

                <div className="text-5xl flex flex-row flex-nowrap justify-center font-black" >Homeo</div>

                <div className="flex flex-row justify-evenly content-center items-center">
                    <span className="flex mr-8" >Follow Us on Social</span>

                    <span className="flex text-xl" >
                        <MdOutlineFacebook />
                        &nbsp; &nbsp;
                        <AiFillTwitterCircle />
                        &nbsp; &nbsp;
                        <AiFillInstagram />
                    </span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer