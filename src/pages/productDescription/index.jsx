import React from "react"
import {Link} from "react-router-dom"

import {IoHeartOutline} from "react-icons/io5";
import {GiArrowScope} from "react-icons/gi"

import Image1 from "../../assets/images/1.jpg"

const ProductDescriptionPage = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">

                <div className="4xs:p-2 sm:p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap overflow-hidden ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Product Description</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="4xs:w-[70%] sm:w-[30%] flex justify-around sm:pr-0 pr-8 ">
                            <Link to="/product">PRODUCT</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500">PRODUCT NAME</h2>
                        </span>
                    </span>
                </div>

                <div className="mt-12 w-[100%] h-full gap-4 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row justify-between content-center items-start mb-12">

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row bg-gray-100 " >
                        <img src={Image1} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] 4xs:p-[1px] sm:pl-6  flex flex-col justify-start content-start items-start 4xs:mb-4 sm:mb-8 " >
                        <h1 className="flex flex-row text-4xl font-semibold mb-4">Namcy Chair</h1>
                        <h1 className="flex flex-row text-3xl font-semibold text-gray-600 mb-4">$100.00</h1>
                        <p className="text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat vel molestias aspernatur, 
                            Fugit hic reprehenderit quas? 
                        </p>

                        <div className="4xs:w-[100%] sm:w-[100%] flex 4xs:flex-col gap-6 sm:flex-row justify-between content-center items-center mb-8  ">
                            <div className="py-2 text-xl 4xs:w-[100%] sm:w-[40%] flex flex-row justify-evenly border-[1px] border-black  ">
                                <div>-</div>
                                <div>1</div>
                                <div>+</div>
                            </div>

                            <div className="4xs:w-[100%] sm:w-[40%] " >
                                <button className="w-[100%] py-2  flex flex-row flex-wrap justify-center bg-black text-white ">Add to Cart</button>
                            </div>

                            <div className="4xs:w-[100%] sm:w-[10%] flex flex-row justify-center text-3xl">
                                <IoHeartOutline className="flex flex-row" />
                            </div>
                        </div>

                        <h1 className="flex text-xl">Category: Beds</h1>
                    </div>

                </div>

                <hr className="w-[100%] 4xs:mt-6 md:mt-24 mb-6 h-[2px] bg-gray-400 " />


                <div className="w-[100%] h-full gap-6 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row justify-between content-center items-center mb-6 ">
                    <div className="4xs:w-[100%] sm:w-[40%] flex flex-col">
                        <h1 className="flex text-3xl mb-4">Description</h1>
                        <p className="flex text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, autem quisquam nobis in error nulla ea totam rem aut adipisci 
                            illo atque magni, doloremque itaque ex iure aliquid illum tempora! 
                        </p>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row  bg-gray-100  " >
                        <img src={Image1} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>
                </div>


                <hr className="w-[100%] 4xs:mt-6 sm:mt-24 mb-12 h-[2px] bg-gray-400 " />

                <div className="w-[100%] h-full gap-12 p-6 4xs:px-4 sm:px-12 lg:px-32 flex 4xs:flex-col sm:flex-row-reverse justify-between content-center items-start mb-6 ">
                    <div className="4xs:w-[100%] sm:w-[40%] flex flex-col">
                        <h1 className="flex text-3xl mb-4">Features</h1>
                        <ul>
                            <li className="flex flex-row items-center content-center ">
                                <GiArrowScope className="mr-2 text-lg "/>
                                Lorem  consequuntur fuga maxime dignissimos eius eos  
                            </li>
                        </ul>
                    </div>

                    <div className="4xs:w-[100%] sm:w-[40%] h-[50%] flex flex-row bg-gray-100  " >
                        <img src={Image1} alt="product" className="flex w-[100%] h-[100%] object-contain   " />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDescriptionPage;