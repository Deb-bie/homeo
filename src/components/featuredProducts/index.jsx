import { useNavigate} from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";

import FeaturedProduct from "../../data/featuredProduct.js"


const FeaturedProducts = () => {
    const navigate = useNavigate()

    const handleDescription = (product) => {
            console.log(product)
            navigate(
                `/products/${product._id}`,
                {
                    state: {
                        // _id: product._id,
                        // name: product.name,
                        // description: product.description,
                        // category: product.category,
                        // stock: product.stock,
                        // price: product.price,
                        // availability: product.availability,
                        // additionalInformation: product.additionalInformation,
                        // image: product.image,
                        // featured: product.featured,
                        product: product
                    }
                }
            )
        
    }


    return (
        <div className="w-[100%] h-full mt-24 flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center" >

                {
                    FeaturedProduct.map((featuredProduct, id) => (
                        <div key={id}>
                            {
                                id === 1 ? 
                                    <div className="px-6 mb-24 4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col-reverse sm:flex-row flex-wrap justify-evenly content-center items-center">
                                        <div className="4xs:w-full sm:w-[40%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start" >
                                            <h6 className="text-gray-300 font-semibold text-base ">FEATURED PRODUCT</h6>
                                            <h1 className="text-5xl font-bold hover:text-red-900">{featuredProduct.name}</h1>
                                            <p className="w-[80%] flex my-8">{featuredProduct.description}</p>
                    
                                            <button onClick={() => handleDescription(featuredProduct)} className="border-2 border-black py-2 px-4 transform transition duration-500 hover:bg-black hover:text-white ">
                                                <span className="inline-flex items-center"> 
                                                    SHOP NOW
                                                    <BsArrowRight className="ml-2" />
                                                </span>
                                            </button>
                                        </div>
                
                                        <div className="flex justify-end 4xs:w-[100%] sm:w-[40%] 4xs:h-[70%] sm:h-auto transform transition duration-500 hover:scale-90 bg-gray-100 ">
                                            <img src={featuredProduct.image} alt="product" />
                                        </div>
                                    </div>
                                : 
                                    <div className="px-6 mb-24 4xs:gap-8 sm:gap-0 w-[100%] h-full flex flex-col sm:flex-row flex-wrap justify-evenly content-center items-center">
                                        <div className="flex 4xs:w-[100%] sm:w-[40%] 4xs:h-[70%] sm:h-auto transform transition duration-500 hover:scale-90 bg-gray-100">
                                            <img src={featuredProduct.image} alt="product" />
                                        </div>
                
                                        <div className="4xs:w-full sm:w-[40%] h-full flex flex-col flex-wrap 4xs:justify-stretch sm:justify-center content-center items-start ">
                                            <h6 className="text-gray-300 font-semibold text-base ">FEATURED PRODUCT</h6>
                                            <h1 className="text-5xl font-bold hover:text-red-900">{featuredProduct.name}</h1>
                                            <p className="w-[80%] flex my-8">{featuredProduct.description} </p>
                    
                                            <button onClick={() => handleDescription(featuredProduct)} className="border-2 border-black py-2 px-4 transform transition duration-500 hover:bg-black hover:text-white ">
                                                <span className="inline-flex items-center"> 
                                                    SHOP NOW
                                                    <BsArrowRight className="ml-2" />
                                                </span>
                    
                                            </button>
                                        </div>
                                    </div>
                            }
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts
