import React, {useState} from "react";
import {Link} from "react-router-dom";
import Image1 from "../../assets/images/CH2 1.png"


import {AiOutlinePlus} from "react-icons/ai"
import {IoCartOutline, IoHeartOutline} from "react-icons/io5"
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"


import "./products.css"


const Products = () => {
    const [filter, setFilter] = useState(false)
    const [categories, setCategories] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [price, setPrice] = useState(false);
    const [modal, setModal] = useState(false);

    const handleCategories = () => {
        if ( (availability || price !== false) ){
            setAvailability(false);
            setPrice(false);
            setCategories(!categories)
        }
        else{
            setCategories(!categories)
        }
    }

    const handleAvailability = () => {
        if ( (categories || price !== false) ){
            setCategories(false);
            setPrice(false);
            setAvailability(!availability)
        }
        else{
            setAvailability(!availability)
        }
    }

    const handlePrice = () => {
        if ( (categories || availability !== false) ){
            setCategories(false);
            setAvailability(false);
            setPrice(!price)
        }
        else{
            setPrice(!price)
        }
    }



    const handlep=()=>{
        console.log("pp")
    }

    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">

                <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap overflow-hidden ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Products</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="w-[10%] flex justify-around sm:pr-0 pr-8 ">
                            <Link to="/">HOME</Link>
                            &nbsp;
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            &nbsp;
                            <h2 className="text-gray-500">PRODUCTS</h2>
                        </span>
                    </span>
                </div>
                
                <div className="4xs:p-4 sm:p-12 w-[100%] h-full flex flex-col ">

                    <div className="4xs:flex flex-row lg:hidden mb-2">
                        <span onClick={()=> setFilter(!filter)} className="flex flex-row items-center" >
                            Filter
                            <FaBars />
                        </span>
                    </div>

                    {
                        (filter)
                        ? 
                        <div className=" h-[100%] w-[100%] mb-12">
                            <div className="w-[100%] ">
                                <div className="w-[100%] ">
                                    <div onClick={() => handleCategories()} className="p-4 text-xl flex flex-row justify-between cursor-pointer padding-4 border-[1px] border-gray-300 border-x-transparent border-t-transparent " >
                                        <div>Categories</div>
                                        <div>{categories ? '-' : '+'}</div>
                                    </div>
                                    {
                                        categories ? 
                                        <div className="p-4">
                                            <form className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                                <div className="flex flex-row content-center items-center mb-2 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="chairs"
                                                    />
                                                    &nbsp;
                                                    <label>Chairs</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-2 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="couches"
                                                    />
                                                    &nbsp;
                                                    <label>Couches</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-2 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="eds"
                                                    />
                                                    &nbsp;
                                                    <label>Beds</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-2 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="tabless"
                                                    />
                                                    &nbsp;
                                                    <label>Tables</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-2 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="dining"
                                                    />
                                                    &nbsp;
                                                    <label>Dining Sets</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-6 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="lights"
                                                    />
                                                    &nbsp;
                                                    <label>Lights</label>
                                                </div>
                                            </form>
                                        </div>
                                        : ""
                                    }
                                </div>

                                <div className="w-[100%] ">
                                    <div onClick={() => handleAvailability()} className="p-4 text-xl flex flex-row justify-between cursor-pointer padding-4 border-[1px] border-gray-300 border-x-transparent border-t-transparent " >
                                        <div>Availability</div>
                                        <div>{availability ? '-' : '+'}</div>
                                    </div>
                                    {
                                        availability ? 
                                        <div className="p-4">
                                            <form className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                                
                                                <div className="flex flex-row content-center items-center mb-4 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="in-stock"
                                                    />
                                                    &nbsp;
                                                    <label>In stock (32)</label>
                                                </div>

                                                <div className="flex flex-row content-center items-center mb-6 ">
                                                    <input 
                                                        type="checkbox"
                                                        value="out-of-stock"
                                                    />
                                                    &nbsp;
                                                    <label>Out of Stock (12)</label>
                                                </div>
                                            </form>
                                        </div>
                                        : ""
                                    }
                                </div>

                                <div className="w-[100%] "> 
                                    <div onClick={() => handlePrice()} className="p-4 text-xl flex flex-row justify-between cursor-pointer padding-4 border-[1px] border-gray-300 border-x-transparent border-t-transparent " >
                                        <div>Price</div>
                                        <div>{price ? '-' : '+'}</div>
                                    </div>
                                    {
                                        price ? 
                                        <div className="p-4">
                                            <form className="border-[1px] border-gray-300 border-x-transparent border-t-transparent ">
                                                <div className="flex flex-col content-start items-start mb-4 ">
                                                    <label className="mb-2">From</label>

                                                    <input 
                                                        type="number"
                                                        // value="from"
                                                        placeholder="$1"
                                                        className="w-[80%] border-[1px] border-black py-2 px-4 outline-none "
                                                    />
                                                </div>

                                                <div className="flex flex-col content-start items-start mb-6 ">
                                                    <label className="mb-2">To</label>

                                                    <input 
                                                        type="number"
                                                        // value="from"
                                                        placeholder="$100"
                                                        className="w-[80%] border-[1px] border-black py-2 px-4 outline-none "
                                                    />
                                                </div>

                                                <div className="w-[100%] flex flex-row mt-8 mb-8">
                                                    <button className="w-[80%] py-2 flex flex-row justify-center bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black ">Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                        : ""
                                    }
                                </div>
                                
                            </div>
                        </div>

                        : ""
                    }

                    <div className="w-[100%] flex flex-row justify-between " >

                        <div className="w-[20%] 4xs:hidden lg:flex flex-col" >
                            <form>

                                <div className="flex flex-col mb-4 border-[1px] border-gray-400 border-x-transparent border-t-transparent ">
                                    <h1 className="flex text-xl font-semibold mb-4">Categories</h1>

                                    {/* <form> */}
                                        <div className="flex flex-row content-center items-center mb-2 ">
                                            <input 
                                                type="checkbox"
                                                value="chairs"
                                            />
                                            &nbsp;
                                            <label>Chairs</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-2 ">
                                            <input 
                                                type="checkbox"
                                                value="couches"
                                            />
                                            &nbsp;
                                            <label>Couches</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-2 ">
                                            <input 
                                                type="checkbox"
                                                value="eds"
                                            />
                                            &nbsp;
                                            <label>Beds</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-2 ">
                                            <input 
                                                type="checkbox"
                                                value="tabless"
                                            />
                                            &nbsp;
                                            <label>Tables</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-2 ">
                                            <input 
                                                type="checkbox"
                                                value="dining"
                                            />
                                            &nbsp;
                                            <label>Dining Sets</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-6 ">
                                            <input 
                                                type="checkbox"
                                                value="lights"
                                            />
                                            &nbsp;
                                            <label>Lights</label>
                                        </div>
                                    {/* </form> */}
                                </div>

                                <div className="mt-4 flex flex-col mb-4 border-[1px] border-gray-400 border-x-transparent border-t-transparent ">
                                    <h1 className="flex text-xl font-semibold mb-6">Availability</h1>

                                    {/* <form> */}
                                        <div className="flex flex-row content-center items-center mb-4 ">
                                            <input 
                                                type="checkbox"
                                                value="in-stock"
                                            />
                                            &nbsp;
                                            <label>In stock (32)</label>
                                        </div>

                                        <div className="flex flex-row content-center items-center mb-6 ">
                                            <input 
                                                type="checkbox"
                                                value="out-of-stock"
                                            />
                                            &nbsp;
                                            <label>Out of Stock (12)</label>
                                        </div>
                                    {/* </form> */}
                                </div>

                                <div className="mt-4 flex flex-col mb-4 border-[1px] border-gray-400 border-x-transparent border-t-transparent ">
                                    <h1 className="flex text-xl font-semibold mb-6">Price</h1>

                                    {/* <form> */}
                                        <div className="flex flex-col content-start items-start mb-4 ">
                                            <label className="mb-2">From</label>

                                            <input 
                                                type="number"
                                                // value="from"
                                                placeholder="$1"
                                                className="w-[80%] border-[1px] border-black py-2 px-4 outline-none "
                                            />
                                        </div>

                                        <div className="flex flex-col content-start items-start mb-6 ">
                                            <label className="mb-2">To</label>

                                            <input 
                                                type="number"
                                                // value="from"
                                                placeholder="$100"
                                                className="w-[80%] border-[1px] border-black py-2 px-4 outline-none "
                                            />
                                        </div>
                                        
                                    {/* </form> */}
                                </div>

                                <div className="w-[100%] flex flex-row mt-20 mb-8">
                                    <button className="w-[80%] py-2 flex flex-row justify-center bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black ">Filter</button>
                                </div>
                            </form>

                        </div>


                        <div className="sm:pl-[4px] 4xs:w-[100%] lg:w-[75%] flex flex-row " >
                            {/* SHOW SELECTED FILTERS OVER HERE */}
                            
                            <div className="w-[90%] flex flex-row flex-wrap justify-evenly items-start content-start gap-8">
                                
                                <div className="flex flex-col 4xs: 3xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out  hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0 overflow-hidden " />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>setModal(!modal)} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>

                                {modal ? 
                                    <>
                                        <div className="w-[100%] flex justify-center items-center overflow-x-hidden 4xs:overflow-y-auto sm:overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000059] ">
                                            <div className="relative w-[100%] h-[100vh] top-[50px]  my-2 4xs:mx-2 sm:mx-12">
                                                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    <div className="w-[100%] h-full flex 4xs:flex-col sm:flex-row gap-8 ">

                                                        <div className="relative 4xs:w-[100%] sm:w-[50%] flex flex-row  bg-[#80808026]">
                                                            <img src={Image1} alt="product" className="w-[100%] h-auto object-contain " />
                                                        </div>

                                                        <div className="absolute 4xs:flex sm:hidden flex-row right-4 top-4 p-4 rounded-[50%] text-3xl bg-gray-300 " >
                                                            <MdClose onClick={() => setModal(false)} className="cursor-pointer" />
                                                        </div>

                                                        <div className="4xs:w-[100%] sm:w-[50%] flex flex-col p-4 pl-6 " >
                                                            <div className="w-[100%] 4xs:hidden sm:flex flex-row justify-end text-3xl mb-4" >
                                                                <MdClose onClick={() => setModal(false)} className="cursor-pointer" />
                                                            </div>
                                                            <div className="text-3xl flex mb-4">Nancy Chair</div>
                                                            <div className="text-2xl text-gray-400 mb-6 ">$100</div>
                                                            <div className="text-base mb-6">Availability: <span className="text-[green]">In stock</span></div>
                                                            <p className="flex text-lg mb-8 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, autem quisquam nobis in error nulla ea totam rem aut adipisci 
                                                                illo atque magni, doloremque itaque ex iure aliquid illum tempora! 
                                                            </p>
                                                            <div className="w-[80%] flex 4xs:flex-col sm:flex-row gap-4 justify-between 4xs:mb-8 sm:mb-0 ">
                                                                <button className="py-2 4xs:w-[100%] sm:w-[40%] flex flex-row justify-evenly border-[1px] border-black " >
                                                                    <span>-</span>
                                                                    <span>1</span>
                                                                    <span>+</span>
                                                                </button>

                                                                <button className="4xs:w-[100%] sm:w-[40%] py-2 flex flex-wrap flex-row justify-center bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black  ">Add to Cart</button>

                                                                <button className="4xs:w-[100%] sm:w-[10%] py-2 flex flex-row justify-center border-[1px] border-black hover:bg-black hover:text-white text-2xl ">
                                                                    <IoHeartOutline />
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                : null}


                                <div className="flex flex-col 4xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out hover:before:opacity-100 transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0" />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>handlep()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>

                                <div className="flex flex-col 4xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out hover:before:opacity-100 transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0" />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>handlep()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>

                                <div className="flex flex-col 4xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out hover:before:opacity-100 transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0" />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>handlep()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>

                                <div className="flex flex-col 4xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out hover:before:opacity-100 transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0" />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>handlep()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>

                                <div className="flex flex-col 4xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                                    <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out hover:before:opacity-100 transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                                        <img src={Image1} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0" />
                                        <div className="w-[100%] pinfo">
                                            <div className="w-[100%] flex flex-row justify-evenly">
                                                <div onClick={()=>handlep()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <AiOutlinePlus />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoCartOutline />
                                                </div>

                                                <div className="icons rounded-3xl rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                                    <IoHeartOutline />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                                        <h1 className="mb-2 text-xl">Nancy Chair</h1>
                                        <div className="mb-4 text-base">$100.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;