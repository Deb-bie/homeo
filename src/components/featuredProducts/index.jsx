import {motion} from "framer-motion"
import { BsArrowRight } from "react-icons/bs";

import Image1 from "../../assets/images/CH2 1.png"

const FeaturedProducts = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center" >
                <div className="mb-24 4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-evenly content-center items-center">
                    <motion.div 
                        // animate={{scale: [0.5, 1, 1]}}
                        // transition={{
                        //     duration: 5,
                        //     ease: "easeInOut",
                        //     repeat: Infinity,
                        //     repeatDelay: 5
                        // }}
                        className="flex 4xs:w-[100%] sm:w-[50%] 4xs:h-[70%] sm:h-auto transform transition duration-500 hover:scale-90">
                            <img src={Image1} alt="product" />
                    </motion.div>

                    <div className="4xs:w-full sm:w-[50%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start ">
                        <h6 className="text-gray-300 font-semibold text-base ">FEATURED PRODUCT</h6>
                        <h1 className="text-5xl font-bold hover:text-red-900">Nancy Chair</h1>
                        <p className="w-[80%] flex my-8">
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                        </p>

                        <button className="border-2 border-black py-2 px-4 transform transition duration-500 hover:bg-black hover:text-white ">
                            <span className="inline-flex items-center"> 
                                SHOP NOW
                                <BsArrowRight className="ml-2" />
                            </span>

                        </button>
                    </div>
                </div>

                <div className="mb-24 4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-evenly content-center items-center">
                    <div className="4xs:w-full sm:w-[50%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start" >
                        <h6 className="text-gray-300 font-semibold text-base ">FEATURED PRODUCT</h6>
                        <h1 className="text-5xl font-bold hover:text-red-900">Nancy Chair</h1>
                        <p className="w-[80%] flex my-8">
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                        </p>

                        <button className="border-2 border-black py-2 px-4 transform transition duration-500 hover:bg-black hover:text-white ">
                            <span className="inline-flex items-center"> 
                                SHOP NOW
                                <BsArrowRight className="ml-2" />
                            </span>

                        </button>
                    </div>

                    <div className="flex justify-end 4xs:w-[100%] sm:w-[50%] 4xs:h-[70%] sm:h-auto transform transition duration-500 hover:scale-90 ">
                        <img src={Image1} alt="product" />
                    </div>
                </div>

                <div className="mb-24 4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-evenly content-center items-center">

                    <div className="flex 4xs:w-[100%] sm:w-[50%] 4xs:h-[70%] sm:h-auto transform transition duration-500 hover:scale-90 ">
                        <img src={Image1} alt="product" />
                    </div>

                    <div className="4xs:w-full sm:w-[50%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start ">
                        <h6 className="text-gray-300 font-semibold text-base ">FEATURED PRODUCT</h6>
                        <h1 className="text-5xl font-bold hover:text-red-900">Nancy Chair</h1>
                        <p className="w-[80%] flex my-8">
                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                        </p>

                        <button className="border-2 border-black py-2 px-4 transform transition duration-500 hover:bg-black hover:text-white ">
                            <span className="inline-flex items-center"> 
                                SHOP NOW
                                <BsArrowRight className="ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
