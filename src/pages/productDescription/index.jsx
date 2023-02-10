import React, {useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {IoHeartOutline, IoAdd, IoCartOutline, IoHeart, IoCart} from "react-icons/io5";
import {GiArrowScope} from "react-icons/gi"
import {GrFormSubtract} from "react-icons/gr"

import Image1 from "../../assets/images/1.jpg"

const ProductDescriptionPage = ({product, addToCart, increaseProductQuantity, decreaseProductQuantity, cartItem, addToWishlist, removeFromFavorites, removeFromCart}) => {
    const location = useLocation();

    const [fav, setFav] = useState(false)
    const [cart, setCart] = useState(false)

    const handleCart = () => {setCart(!cart)}
    const handleFav = () => {setFav(!fav)}


    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">

                <div className="4xs:p-2 sm:p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap overflow-hidden ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Product Description</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="4xs:w-[70%] sm:w-[30%] flex justify-around sm:pr-0 pr-8 ">
                            <Link to="/products">PRODUCTS</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500">{location.state.product.name}</h2>
                        </span>
                    </span>
                </div>

                <div className="mt-12 w-[100%] h-full gap-4 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row justify-between content-center items-start mb-12">

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row bg-gray-100 " >
                        <img src={location.state.product.image} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] 4xs:p-[1px] sm:pl-6  flex flex-col justify-start content-start items-start 4xs:mb-4 sm:mb-8 " >
                        <h1 className="flex flex-row text-4xl font-semibold mb-4">{location.state.product.name}</h1>
                        <h1 className="flex flex-row text-3xl font-semibold text-gray-600 mb-4">$100.00</h1>
                        <p className="text-base mb-4">{location.state.product.description}
                        </p>

                        <div className="4xs:w-[100%] sm:w-[100%] flex 4xs:flex-col gap-6 sm:flex-row justify-between content-center items-center mb-8  ">
                            <div className="py-2 text-xl 4xs:w-[100%] sm:w-[40%] flex flex-row justify-evenly items-center border-[1px] border-black  ">
                                <div onClick={() => decreaseProductQuantity(location.state.product)} className="cursor-pointer"><GrFormSubtract /></div>
                                
                                {
                                    cartItem.length > 0
                                    ? <>
                                        {
                                            cartItem.map((cart, id) => (
                                                <div key={id}>{cart.qty}</div>
                                            ))
                                        }
                                    </>
                                    : <div>{location.state.product.qty}</div>
                                }
                                
                                <div onClick={() => increaseProductQuantity(location.state.product, location.state.product.stock, location.state.product.qty)} className="cursor-pointer"><IoAdd /></div>
                            </div>

                            {/* <div className="4xs:w-[100%] sm:w-[40%] " onClick={() => addToCart(location.state.product)} >
                                <button className="w-[100%] py-2  flex flex-row flex-wrap justify-center bg-black text-white ">Add to Cart</button>
                            </div> */}


                                <div onClick={
                                    cart ? 
                                        () => {removeFromCart(location.state.product); handleCart(!cart) }      
                                    :
                                        () => {addToCart(location.state.product); handleCart(!cart)}
                                    } 
                                    style={{
                                        backgroundColor: cart ? '#e92467' : '', 
                                        color: cart ? "white" : '', 
                                        borderColor: cart ? "transparent" : "",
                                    }} 
                                    className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 "
                                >
                                    <IoCartOutline />
                                </div>


                                <div 
                                    onClick={
                                        fav ? 
                                             () => {removeFromFavorites(location.state.product); handleFav(!fav) }      
                                        :
                                            () => {addToWishlist(location.state.product); handleFav(!fav)}
                                    } 
                                    style={{
                                        backgroundColor: fav ? '#e92467' : '', 
                                        color: fav ? "white" : '', 
                                        borderColor: fav ? "transparent" : "",
                                    }} 
                                    className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 "
                                >
                                    <IoHeartOutline />
                                </div>









{/* 
                            <div className="4xs:w-[100%] sm:w-[10%] flex flex-row justify-center text-3xl">
                                <IoHeartOutline className="flex flex-row" />
                            </div> */}
                        </div>

                        <h1 className="flex text-xl">Category: {location.state.product.category}</h1>
                    </div>

                </div>

                <hr className="w-[100%] 4xs:mt-6 md:mt-24 mb-6 h-[2px] bg-gray-400 " />


                <div className="w-[100%] h-full gap-6 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row justify-between content-center items-center mb-6 ">
                    <div className="4xs:w-[100%] sm:w-[40%] flex flex-col">
                        <h1 className="flex text-3xl mb-4">Description</h1>
                        <p className="flex text-lg">{location.state.product.description}</p>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row  bg-gray-100  " >
                        <img src={location.state.product.image} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>
                </div>


                <hr className="w-[100%] 4xs:mt-6 sm:mt-24 mb-12 h-[2px] bg-gray-400 " />

                <div className="w-[100%] h-full gap-12 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row-reverse justify-between content-center items-start mb-6 ">
                    <div className="4xs:w-[100%] sm:w-[40%] flex flex-col">
                        <h1 className="flex text-3xl mb-4">Features</h1>
                        <ul>
                            <li className="flex flex-row items-center content-center ">
                                <GiArrowScope className="mr-2 text-lg "/>
                                {location.state.product.additionalInformation}
                            </li>
                        </ul>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row bg-gray-100  " >
                        <img src={location.state.product.image} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDescriptionPage;