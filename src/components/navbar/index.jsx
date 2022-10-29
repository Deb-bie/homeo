import React, {useState} from 'react';
import Badge from '@mui/material/Badge';
import {IoPersonOutline, IoCartOutline, IoHeartOutline, IoMenuOutline, IoSearchOutline} from "react-icons/io5"
import {MdClose} from "react-icons/md"
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom';

import Logo from "../../assets/logo1.png"




const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
);


const variants = {
    show: {
      transform: "translateX(0em)",
      opacity: 1,
    },
    hide: {
      transform: "translateX(-5em)",
      opacity: 0,
    },
};



const transition = { 
    duration: 0.3 
};



const menuVariants = {
    open: {
      transform: "translateX(-3%)",
    },
    closed: {
      transform: "translateX(-103%)",
    },
};
  

const menuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1,
};
  







const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    const [s, setS] = useState(false)

    const handleMobile = () => {setMobile(!mobile)}

    const handleS = () => {setMobile(!mobile)}


  return (
    <nav className="sticky flex flex-row w-full 4xs:overflow-hidden h-[100px] z-10 overflow-clip ">
        <div className='sticky flex flex-row flex-nowrap justify-around items-center content-center w-[100%] h-[100px]' >

            <div className="hidden lg:flex flex-row flex-nowrap items-center content-center lg:w-[25%] bg-white cursor-pointer " >
                <div className="flex flex-row justify-between content-center items-center lg:w-full hover:border-b-2 border-b-2 border-slate-100 transform transition duration-500 hover:scale-90 " >
                    <input type="text" placeholder="Please search for your home decor products" className="w-full h-8 outline-none focus-none flex text-ellipsis p-2 " />
                    <span className="flex left-[25%] pl-12 pr-2 ">
                        <IoSearchOutline />
                    </span>
                </div>
            </div>

            <div className="lg:hidden flex flex-row " >

                <button onClick={() => handleMobile()} className="] absolute z-20 " >
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            animate={mobile ? "open" : "closed"}
                            initial={false}
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 0%)" },
                                open: { 
                                    d: "M 3 16.5 L 17 2.5", 
                                    stroke: "hsl(0, 0%, 0%)",
                                    // transform: "translateX(-103%)", 
                                },
                            }}
                            transition={transition}
                        />

                        <Path
                            d="M 2 9.423 L 20 9.423"
                            stroke="hsl(0, 0%, 0%)"
                            animate={mobile ? "open" : "closed"}
                            initial={false}
                            variants={{
                                closed: { opacity: 1 },
                                open: { 
                                    opacity: 0,
                                    // transform: "translateX(-103%)",
                                },
                            }}
                            transition={transition}
                        />
                            
                        <Path
                            animate={mobile ? "open" : "closed"}
                            initial={false}
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 0%)" },
                                open: { 
                                    d: "M 3 2.5 L 17 16.346", 
                                    stroke: "hsl(0, 0%, 0%)" ,
                                    // transform: "translateX(-103%)",
                                },
                            }}
                            transition={transition}
                        />
                    </svg>
                </button>

                <motion.div
                    initial={false}
                    animate={mobile ? "open" : "closed"} 
                    variants={menuVariants}
                    transition={menuTransition}
                    className="
                      4xs:w-[103vw] md:w-[50vw] h-screen bg-white z-10 fixed top-0 left-0 transform translate-x-0  " 
                        >

                    <div className='flex flex-col mt-4'>
                        <div className="w-full flex flex-col">
                            <ul className="py-32 pl-[30px] w-full flex flex-col ">
                                <motion.li 
                                    initial={false}
                                    animate={mobile ? "show" : "hide"}
                                    variants={{
                                        show: {
                                            ...variants.show,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.2
                                            }
                                        },
                                        hide: {
                                            ...variants.hide,
                                            transition: {
                                                delay: 0.05,
                                                duration: 0.05
                                            }
                                        }
                                    }}
                                    className="text-xl h-[42px] flex items-center cursor-pointer " 
                                >
                                    {/* <NavLink to="#" className="decoration-none text-black text-2xl transition-all duration-200 ease-in-out hover:text-[#555] ">Home</NavLink> */}
                                    {/* okay */}
                                    <div className="flex flex-row justify-between content-center items-center lg:w-full hover:border-b-2 border-b-2 border-slate-100 transform transition duration-500 hover:scale-90 " >
                                        <input type="text" placeholder="Please search for your home decor products" className="w-full h-8 outline-none focus-none flex text-ellipsis p-2 " />
                                        <span className="flex left-[25%] pl-12 pr-2 ">
                                            <IoSearchOutline />
                                        </span>
                                    </div>
                                </motion.li>

                                <motion.li 
                                    initial={false}
                                    animate={mobile ? "show" : "hide"}
                                    variants={{
                                        show: {
                                            ...variants.show,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.2
                                            }
                                        },
                                        hide: {
                                            ...variants.hide,
                                            transition: {
                                                delay: 0.05,
                                                duration: 0.05
                                            }
                                        }
                                    }}
                                    className="text-xl h-[42px] flex items-center cursor-pointer pt-8 " 
                                >
                                    <a href="#" className="text-black text-2xl">
                                        All Products
                                    </a>
                                    {/* About */}
                                </motion.li>

                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>







































            {/* <div className="lg:hidden flex flex-row flex-nowrap items-center content-center cursor-pointer" onClick={handleMobile}>
                <div className="flex">
                    {
                        (mobile) 
                        ? 
                            <div className="flex 4xs:left-[90%] sm:left-[30%] top-0 absolute ">
                                <MdClose className=" z-10 " />
                            </div>
                        
                        : <IoMenuOutline /> 
                    }
                </div>
            </div> */}

            {/* {
                (mobile) 
                ?
                <div className="fixed left-0 top-0 pt-[100px] h-screen sm:w-1/3 4xs:w-screen 4xs:overflow:hidden flex flex-col justify-start content-center items-stretch bg-blue-200">
                    <div className="flex flex-col justify-center content-center items-center">
                        <div className="flex flex-col h-[30vh] ">
                            <ul className="flex flex-col justify-evenly items-center content-start h-full">
                                <div to="#" className="flex" onClick={handleMobile}>Home</div>
                                <div to="#" className="flex" onClick={handleMobile}>About Us</div>
                                <div to="#" className="flex" onClick={handleMobile}>Services</div>
                                <div to="#" className="flex" onClick={handleMobile}>Contact Us</div>
                            </ul>
                        </div>
        
                        <div className="flex flex-col h-[20vh] justify-evenly">
                            <button className="flex bg-green-100 border-2 p-4">Sign In</button>
                            <button className="flex bg-red-100 border-2 p-4">Sign Up</button>
                        </div>
                    </div>
                </div>
                : ""
            } */}

            <div className="flex flex-row items-center justify-center text-lg content-center lg:w-[40%] cursor-pointer">
                <img src={Logo} alt='logo' className="flex flex-row justify-center" />
            </div>

            <div className="flex flex-row items-center content-center justify-end lg:w-[25%]">
                <div className="flex lg:pr-8 pr-4 lg:text-2xl text-lg cursor-pointer -z-10">
                    <IoPersonOutline color="action" />
                </div>

                <div className="flex lg:pr-8 pr-4 lg:text-2xl text-lg cursor-pointer -z-10 ">
                    <Badge badgeContent={4} color="error" className="" >
                        <IoHeartOutline color="action" />
                    </Badge>
                </div>

                <div className="flex lg:text-2xl text-lg cursor-pointer -z-10">
                    <Badge badgeContent={4} color="error" badgeSize={10} >
                        <IoCartOutline color="action" className="z-0" />
                    </Badge>
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Navbar