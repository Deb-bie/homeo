import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {IoCartOutline} from "react-icons/io5";
import {IoIosArrowRoundBack, IoMdClose} from "react-icons/io"


const Cart = ({
    cartItem, 
    removeFromCart, 
    removeAllProductsFromCart, 
    increaseProductQuantity, 
    decreaseProductQuantity,
    totalPrice 
}) => {
    const navigate = useNavigate()

    const handleShopping = () => {navigate("/products")}
    const handleDescription = (id) => { navigate("/products/id") }





  return (
    <div className="w-[100%] h-full flex overflow-hidden ">
        <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">
            
            <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap ">
                <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Cart</h1>
                <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                    <span className="w-[10%] flex justify-around sm:pr-0 pr-8 ">
                        <Link to="/">HOME</Link>
                        &nbsp;
                        <h2>/</h2>
                        &nbsp;
                        <h2 className="text-gray-500">CART</h2>
                    </span>
                </span>
            </div>

            {
                cartItem.length > 0 ? 
                
                <div className="py-24 px-4 sm:px-12 w-[100%] h-full flex flex-col justify-between items-start content-center ">

                    <div className="4xs:mb-2 sm:mb-8 w-[100%] h-[50px] bg-[#a9a9a94a] flex flex-row justify-between content-center items-center overflow-hidden 4xs:text-[10px] 2xs:text-[16px] sm:text-xl">
                        <div className="w-[40%] flex ">Product</div>

                        <div className="w-[50%] flex flex-row flex-nowrap content-center justify-between items-center ">
                            <div className="flex w-[30%] ">Price</div>
                            <div className="flex w-[30%] ">Quantity</div>
                            <div className="flex w-[30%] justify-end">Total</div>
                        </div>

                        <div className="w-[5%] flex">x</div>
                    </div>

                    {
                        cartItem.map((item, id) => {
                            // const qtyPrice = item.price * item.qty;
                            
                            return (
                                <div key={id} className="outline-none border-[1px] border-b-gray-500 border-t-transparent border-x-transparent 4xs:py-4 sm:py-6 4xs:px-2 sm:px-6 w-[100%] h-[100%]  flex flex-row justify-between content-center items-center overflow-hidden ">
                                    <div  className="gap-4 w-[40%] flex 4xs:flex-col sm:flex-row 4xs:justify-center sm:justify-start 4xs:items-start sm:items-center content-center overflow-hidden cursor-pointer ">
                                        <div onClick={() => handleDescription(1)} className="flex 4xs:w-[30px] 2xs:w-[100px] xs:w-[150px] h-auto sm:w-[40%] sm:h-[100px] 4xs:justify-center 4xs:content-center 4xs:items-center bg-gray-100  " >
                                            <img src={item.image} alt="product" className=" w-[80%] h-[100%] object-contain " />
                                        </div>
                                        <div onClick={() => handleDescription(1)} className="4xs:w-full sm:w-[150px] inline-block overflow-hidden text-ellipsis hover:text-sky-700">
                                            {item.productName}
                                        </div>
                                    </div>
            
                                    <div className="w-[50%] flex flex-row flex-nowrap content-center justify-between items-center text-xl overflow-hidden">
                                        <div className="w-[30%] flex 4xs:text-[10px] 2xs:text-[16px] sm:text-lg  ">
                                            ${item.price}
                                        </div>
            
                                        <div className='gap-6 w-[30%] 4xs:h-[120px] sm:h-auto text-xl flex 4xs:flex-col sm:flex-row 4xs:justify-evenly sm:justify-evenly content-center items-center 4xs:text-[10px] 2xs:text-[16px] sm:text-lg'>
                                                <span onClick={ () => decreaseProductQuantity(item)} className="flex cursor-pointer text-2xl">-</span>
                                                <span className="flex cursor-pointer text-2xl">{item.qty}</span>
                                                <span onClick={() => increaseProductQuantity(item, item.stock)} className="flex cursor-pointer text-2xl">+</span>
                                        </div>
            
                                        <div className="w-[30%] flex flex-row justify-end 4xs:text-[10px] 2xs:text-[16px] sm:text-lg ">
                                            ${item.qtyPrice}
                                        </div>
                                    </div>
            
                                    <div onClick={() => removeFromCart(item)} className="w-[5%] flex justify-end items-end content-center 4xs:text-[10px] 2xs:text-[16px] sm:text-lg cursor-pointer">
                                        <IoMdClose />
                                    </div>
                                </div>
                            )
                        }
                            
                        )
                    }



                <div className="mt-32 gap-12 w-[100%] flex 4xs:flex-col sm:flex-row justify-between">
                    <button onClick={()=>handleShopping()} className="flex justify-center hover:bg-black hover:text-white py-2 px-6 bg-white text-black border-black border-2  ">
                        <IoIosArrowRoundBack className="text-2xl" />
                        &nbsp;
                        Continue Shopping
                    </button>
                    <button onClick={ () => removeAllProductsFromCart()} className="flex justify-center bg-black text-white py-2 px-12 hover:bg-white hover:text-black hover:border-black hover:border-2  ">
                        Clear Cart
                    </button>
                </div>

                <div className="w-[100%] h-full mt-12 flex flex-row justify-end">
                    <div className="4xs:w-[100%] sm:w-[40%] flex flex-col">

                        <div className="w-[100%] flex flex-col bg-gray-100 py-8 px-6 border-[1px] border-black">
                            <div className="gap-2 w-[100%] my-4 py-4 flex flex-wrap flex-row justify-between border-[1px] border-black border-x-transparent border-t-transparent ">
                                <div className="flex text-2xl">SubTotal</div>

                                <div className="flex text-2xl">${totalPrice}</div>
                            </div>

                            <div className="gap-2 w-[100%] my-4 py-4 flex flex-wrap flex-row justify-between ">
                                <div className="flex text-2xl">Total</div>

                                <div className="flex text-3xl text-rose">${totalPrice}</div>
                            </div>
                        </div>

                        <div className="w-[100%] mt-12 flex">
                            <button 
                                onClick={() => navigate("/checkout")}
                                className='w-[100%] flex justify-center bg-black text-white py-4 px-12 hover:bg-white hover:text-black hover:border-black hover:border-2 '>Proceed to checkout</button>
                        </div>

                    </div>

                    
                </div>

            </div>
                
                : 
                    <div className="py-32 w-[100%] h-full flex flex-col flex-wrap justify-center items-center content-center ">
                        <div className="flex">
                            <IoCartOutline className="text-[200px] font-black "  />
                        </div>

                        <div className="flex text-xl">No items found in Cart</div>

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

export default Cart