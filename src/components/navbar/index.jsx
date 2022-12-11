import React, {useState} from 'react';
import Badge from '@mui/material/Badge';
import {IoPersonOutline, IoCartOutline, IoHeartOutline, IoSearchOutline} from "react-icons/io5"
import { BsFacebook} from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"
import {MdClose} from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';

import Logo from "../../assets/logo.svg"
import "./style.css"



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

const itemsVariants = {
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
}



const Navbar = ({cartItem, favoriteItem, removeFromCart, totalPrice}) => {
    const navigate = useNavigate()

    const [mobile, setMobile] = useState(false)
    const handleMobile = () => {setMobile(!mobile)}
    const [openCart, setOpenCart] = useState(false)

    const handleOpenCart = () => {setOpenCart(!openCart)}
    const checkOut = () => {navigate("/checkout")}
    const cart = () => {navigate("/cart")}


    window.addEventListener("scroll", function () {
        const stick = document.querySelector("nav")
        stick.classList.toggle('active', window.scrollY > 100)
    })


  return (
    <nav className="sticky top-0 flex flex-row w-full 4xs:overflow-hidden h-[100px] z-50 overflow-clip bg-white">
        <div className=' w-[100%] h-[100px] 4xs:px-2 sm:px-12 flex flex-row flex-nowrap justify-between items-center content-center' >

            <div className="w-[30%] hidden lg:flex flex-row flex-nowrap items-center content-center cursor-pointer " >
                <div className="flex flex-row justify-between content-center items-center lg:w-full hover:border-b-2 border-b-2 border-slate-100 transform transition duration-500 hover:scale-90 " >
                    <input type="text" placeholder="Please search for your home decor products" className="w-full h-8 outline-none focus-none flex text-ellipsis p-2 " />
                    <span className="flex left-[25%] pl-12 pr-2 ">
                        <IoSearchOutline />
                    </span>
                </div>
            </div>

            <div className="w-[30%] lg:hidden flex flex-row " >

                <button onClick={() => handleMobile()} className="z-20 " >
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            animate={mobile ? "open" : "closed"}
                            initial={false}
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 0%)" },
                                open: { 
                                    d: "M 3 16.5 L 17 2.5", 
                                    stroke: "hsl(0, 0%, 0%)",
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
                      4xs:w-[103vw] md:w-[50vw] h-full bg-white z-10 fixed overflow-auto top-0 left-0 transform translate-x-0  " 
                        >

                    <div className='flex flex-col mt-4'>
                        <div className="w-full flex flex-col">
                            <ul className="py-32 pl-[30px] w-full flex flex-col ">
                                <motion.li initial={false} animate={mobile ? "show" : "hide"} variants={itemsVariants}
                                    className="text-xl h-[42px] flex items-center cursor-pointer " 
                                >
                                    <div className="flex flex-row justify-between content-center items-center lg:w-full hover:border-b-2 border-b-2 border-slate-100 transform transition duration-500 hover:scale-90 " >
                                        <input type="text" placeholder="Please search for your home decor products" className="w-full h-8 outline-none focus-none flex text-ellipsis p-2 " />
                                        <span className="flex left-[25%] pl-12 pr-2 ">
                                            <IoSearchOutline />
                                        </span>
                                    </div>
                                </motion.li>

                                <motion.li initial={false} animate={mobile ? "show" : "hide"} variants={itemsVariants} className="text-xl h-[42px] flex items-center cursor-pointer mt-8 " >
                                    <Link to="#" className="text-black text-2xl">
                                        All Products
                                    </Link>                            
                                </motion.li>

                                <motion.li initial={false} animate={mobile ? "show" : "hide"} variants={itemsVariants} className="text-xl h-[42px] flex items-center cursor-pointer mt-2 " >
                                    <Link to="#" className="text-black text-2xl">
                                        Categories
                                    </Link>                            
                                </motion.li>

                                <motion.li initial={false} animate={mobile ? "show" : "hide"} variants={itemsVariants} className="text-xl h-[42px] flex items-center cursor-pointer mt-32 " >
                                    <div className="flex flex-col flex-wrap mt-32 text-base ">
                                        <h4 className="flex mb-4 font-bold text-center text-base ">Contact Us</h4>
                                        <div className="flex flex-wrap  ">78 Mango Street, TX 908, Texas, United States</div>
                                        <p>customer.service@homeo.com</p>

                                        <div className="mt-4 flex flex-row justify-between">
                                            <div className="flex font-black ">Follow us on socials</div>
                                            <div className="flex" >               
                                                <BsFacebook className="text-lg ml-2"/>
                                                <AiFillTwitterCircle className="text-xl ml-2 mr-2" />
                                                <AiFillInstagram className="text-xl text-black " />
                                            </div>
                                        </div>     
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>            
            
            <div className="w-[30%] flex flex-row items-center justify-center text-lg content-center  cursor-pointer">
                <Link to="/">
                    <img src={Logo} alt='logo' className=" h-auto object-contain flex flex-row justify-center" />
                </Link>
            </div>

            <div className="w-[30%] h-full  flex flex-row items-center content-center justify-center overflow-hidden">
                <div className="flex lg:mr-8 mr-4 lg:text-2xl text-lg cursor-pointer">
                    <Link to="/login">
                        <IoPersonOutline className="cursor-pointer " />
                    </Link>
                </div>

                <div className="flex lg:mr-8 mr-4 lg:text-2xl text-lg cursor-pointer">
                    <Link to="wishlist">
                        <Badge badgeContent={favoriteItem === 0 ? 0 : favoriteItem.length} color="success" className="" >
                            <IoHeartOutline />
                        </Badge>
                    </Link>
                </div>

                <div 
                    onClick={
                        cartItem.length > 0 ?         
                            handleOpenCart
                        : 
                            () => navigate("/cart")
                        
                    } 
                    className="flex lg:text-2xl text-lg cursor-pointer">

                    <Badge badgeContent={cartItem.length === 0 ? 0 : cartItem.length } color="error" badgesize={10} >
                        <IoCartOutline className="z-0" />
                    </Badge>

                </div>


                {
                    cartItem.length > 0 ? "" : ""
                }


                {
                    openCart ? 
                    <>
                        
                                <div className="fixed right-0 top-0 h-screen sm:w-1/3 4xs:w-screen 4xs:overflow:hidden flex flex-col bg-white shadow-xl z-50 ">
                                    <div className=" w-[100%] h-[100%] flex flex-col justify-between overflow-hidden ">
                                        <div className="h-[5%] flex pt-[20px] pl-[20px] text-3xl cursor-pointer ">
                                            <MdClose onClick={handleOpenCart} />
                                        </div>

                                        <div className=" w-[100%] flex flex-col overflow-y-scroll h-[45%] bg-[#eeeeeead] ">
                                            {                                
                                                cartItem.map((item, id) => (
                                                    <div key={id} className="pl-2 pr-6 pt-4 w-[100%] h-[120px] flex flex-row justify-between content-center items-center border-[1px] border-black border-x-transparent border-t-transparent">
                                                        <div className=" w-[70%] h-[100px] flex flex-row justify-evenly content-center items-center  flex-nowrap">
                                                            <div className="flex ">
                                                                <img src={item.image} alt="product" className="w-[100px] h-[80px] object-contain " />
                                                            </div>
                                                            <div className="flex flex-col items-start content-center">
                                                                <div>{cartItem.productName}</div>
                                                                <div>Qty: {item.qty}</div>
                                                                <div>${item.qtyPrice}</div>
                                                            </div>
                                                        </div>
       
                                                        <div className="w-[5%] cursor-pointer text-3xl " >
                                                            <MdClose onClick={() => removeFromCart(item)} />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
   
                                        <div className="4xs:mt-4 sm:pt-8 pl-6 pr-6 w-[100%] h-[35%] flex flex-col justify-center content-center items-center shadow-xl ">
                                            <div className=" w-[100%] flex flex-row justify-between ">
                                                <div className="flex text-2xl text-black">Subtotal</div>
                                                <div className="flex text-xl text-rose-900 ">${totalPrice}</div>
                                            </div>
                                        
                                            <div onClick={()=> {handleOpenCart(); cart()}} className="mt-6 w-[100%] flex justify-center content-center">
                                                <button className="w-[100%] py-4 flex flex-row justify-center content-center items-center hover:bg-black hover:text-white text-black bg-white border-[1px] border-black ">View cart</button>
                                            </div>
        
                                            <div onClick={()=> {handleOpenCart(); checkOut()}} className="mt-6 mb-20 w-[100%] flex justify-center content-center">
                                                <button className=" w-[100%] py-4  flex flex-row justify-center items-center content-center bg-black text-white hover:text-black hover:bg-white hover:border-[1px] hover:border-black ">Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                    </>
                    : ""
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar