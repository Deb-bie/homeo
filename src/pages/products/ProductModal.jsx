import React from 'react'
import {IoCartOutline, IoHeartOutline, IoHeart, IoCart} from "react-icons/io5"
import {MdClose} from "react-icons/md"
import {FiExternalLink} from "react-icons/fi"
import { useNavigate } from "react-router-dom"


const ProductModal = ({product,modal, handleModal, cart, removeFromCart, handleCart, addToCart, fav, removeFromFavorites, addToWishlist, handleFav}) => {

    const navigate = useNavigate();

    const productDescription = (product) => {
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
    <div className="w-[100%] flex justify-center items-center overflow-x-hidden 4xs:overflow-y-auto sm:overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000059] ">
        <div className="relative w-[100%] h-[100vh] top-[50px]  my-2 4xs:mx-2 sm:mx-12">
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="w-[100%] h-full flex 4xs:flex-col sm:flex-row gap-8 ">

                    <div className="relative 4xs:w-[100%] sm:w-[50%] 4xs:h-[40vh] sm:h-[80vh] flex flex-row  bg-[#80808026]">
                        <img src={product.image} alt="product" className="w-[100%] h-[100%]  object-contain " />
                    </div>

                    <div className="absolute 4xs:flex sm:hidden flex-row right-4 top-4 p-4 rounded-[50%] text-3xl bg-gray-300 " >
                        <MdClose onClick={() => handleModal(!modal) } className="cursor-pointer" />
                    </div>

                    <div className="4xs:w-[100%] sm:w-[50%] flex flex-col p-4 pl-6 " >
                        <div className="w-[100%] 4xs:hidden sm:flex flex-row justify-end text-3xl mb-4" >
                            <MdClose onClick={() => handleModal(!modal) } className="cursor-pointer" />
                        </div>
                        <div className="text-3xl flex mb-4">{product.name}</div>
                        <div className="text-2xl text-gray-400 mb-6 ">${product.price}</div>
                        <div className="text-base mb-6">Availability: <span className="text-[green]">{product.availability}</span></div>
                        <p className="flex text-lg mb-8 ">{product.description}</p>
                        <div className="w-[60%] flex 4xs:flex-col sm:flex-row sm:items-center gap-4 justify-between 4xs:mb-8 sm:mb-0  ">

                            <button 
                                onClick={
                                    cart 
                                    ?   () => {removeFromCart(product); handleCart(!cart) }      
                                    :   () => {addToCart(product); handleCart(!cart)}
                                }
                                className=" py-2 flex flex-wrap flex-row justify-center text-5xl  "
                            >
                                                
                                {
                                    cart
                                    ? <IoCart className="text-[#026908]"/>
                                    : <IoCartOutline />
                                }
                            </button>

                            <button 
                                onClick={
                                    fav ? () => {removeFromFavorites(product); handleFav(!fav) }      
                                    :   () => {addToWishlist(product); handleFav(!fav)}
                                } 
                                className=" py-2 flex flex-row justify-center text-5xl "
                            >
                                                
                                {
                                    fav 
                                    ? <IoHeart className="text-[#e92467]" />
                                    : <IoHeartOutline />
                                }
                            </button>

                            <button 
                                onClick={() => productDescription(product)}
                                className=" py-2 flex flex-row justify-center  text-2xl text-sky-800"
                            >
                                <FiExternalLink />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductModal