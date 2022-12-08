import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {IoHeartOutline} from "react-icons/io5";
import {IoIosArrowRoundBack, IoMdClose} from "react-icons/io"

const Favorites = ({favoriteItem, addToCart, removeFromFavorites, removeAllProductsFromFavorites}) => {
    const navigate = useNavigate()

    const handleShopping = () => {navigate("/products")}
    const handleDescription = (id) => { navigate("/products/id") }



  return (
    <div className="w-[100%] h-full flex overflow-hidden ">
        <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">
            
            <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap ">
                <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Wishlist</h1>
                <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                    <span className="w-[10%] flex justify-around sm:pr-0 pr-8 ">
                        <Link to="/">HOME</Link>
                        &nbsp;
                        <h2>/</h2>
                        &nbsp;
                        <h2 className="text-gray-500">WISHLIST</h2>
                    </span>
                </span>
            </div>

            {
                favoriteItem.length > 0 ? 
                    
                    <div className="py-24 px-4 sm:px-12 w-[100%] h-full flex flex-col justify-between items-start content-center ">
                        <div className="mb-8 w-[100%] h-[50px] bg-[#a9a9a94a] flex flex-row justify-between content-center items-center overflow-hidden">
                            <div className="flex pl-12 text-xl">Product</div>
                            <div className="w-[50%] flex flex-row flex-nowrap content-center justify-start items-center text-xl">Price</div>
                        </div>

                        {
                            favoriteItem.map((item, id) => (
                                <div className="outline-none border-[1px] border-b-gray-500 border-t-transparent border-x-transparent 4xs:py-4 sm:py-6 4xs:px-2 sm:px-6 w-[100%] h-[100%]  flex flex-row justify-between content-center items-center overflow-hidden ">
                                    <div className="gap-4 w-[30%] flex 4xs:flex-col sm:flex-row 4xs:justify-center sm:justify-between 4xs:items-start sm:items-center content-center cursor-pointer ">
                                        <div onClick={() => handleDescription(1)} className="flex 4xs:w-[30px] 2xs:w-[100px] xs:w-[150px] h-auto sm:w-[40%] sm:h-[100px] 4xs:justify-center 4xs:content-center 4xs:items-center bg-gray-100  " >
                                            <img src={item.image} alt="product" className=" w-[80%] h-[100%] object-contain " />
                                        </div>
        
                                        <div onClick={() => handleDescription(1)} className="4xs:w-full sm:w-[150px] inline-block overflow-hidden text-ellipsis hover:text-sky-700">{item.productName}</div>
                                    </div>
        
                                    <div className="4xs:px-0 xs:px-4 lg:px-12 4xs:py-0 xs:py-2 lg:py-8 gap-2 w-[30%] flex 4xs:flex-col sm:flex-row 4xs:justify-start  sm:justify-between content-center 4xs:items-start sm:items-center ">
                                        <div className="flex text-base sm:text-xl">$100.0</div>
                                        <button onClick={()=> {addToCart(item); removeFromFavorites(item)}}  className="flex py-2 4xs:px-4 lg:px-8 bg-black text-white text-[12px] sm:text-base lg:text-xl">Buy</button>
                                    </div>
        
                                    <div onClick={() => removeFromFavorites(item)} className="w-[5%] flex justify-center items-end content-center text-2xl cursor-pointer">
                                        <IoMdClose />
                                    </div>
                                </div>

                            ))
                        }
                        <div className="w-[100%] flex flex-row justify-end mt-12">
                            <button onClick={() => removeAllProductsFromFavorites()} className="flex bg-black text-white py-2 px-6 hover:bg-white hover:text-black hover:border-black hover:border-2  ">Clear Wishlist</button>
                        </div>
                    </div>
                : 
                
                <div className="py-32 w-[100%] h-full flex flex-col flex-wrap justify-center items-center content-center ">
                    <div className="flex">
                        <IoHeartOutline className="text-[200px] font-black "  />
                    </div>
                    <div className="flex text-xl">No items found in Wishlist</div>
                    <button onClick={() => handleShopping()} className="my-8 outline-none flex justify-center content-center items-center  py-2 px-4 bg-black text-white">
                        <IoIosArrowRoundBack className="text-2xl" />
                        Continue Shopping
                    </button>
                </div>
            }
        </div>
    </div>
  )
}

export default Favorites