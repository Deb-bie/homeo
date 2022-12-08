import {useState} from "react"
import {AiOutlinePlus} from "react-icons/ai"
import {IoCartOutline, IoHeartOutline} from "react-icons/io5"
import {MdClose} from "react-icons/md"


const Product = ({
    product,
    addToCart, 
    removeFromCart, 
    addToWishlist, 
    removeFromFavorites, 
    cartItem
}) => {

    const [fav, setFav] = useState(false)
    const [cart, setCart] = useState(false)
    const [modal, setModal] = useState(false);

    const handleCart = () => {setCart(!cart)}
    const handleFav = () => {setFav(!fav)}
    const handleModal = () => {setModal(!modal)}


    return (
        <div>
            <div className="flex flex-col 4xs: 3xs:w-[150px] sm:w-[240px] 4xs:h-[250px] sm:h-[320px] bg-white ">
                <div className="pcard 4xs:h-[150px] sm:h-[250px] transition duration-500 ease-out  hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                    <img src={product.image} alt="category" className="absolute w-[300px] 4xs:h-[100px] sm:h-[200px] object-contain top-0 left-0 overflow-hidden " />
                        <div className="w-[100%] pinfo">
                            <div className="w-[100%] flex flex-row justify-evenly">
                                <div onClick={()=>handleModal()} className="icons rounded-[70%] bg-white 4xs:text-base sm:text-xl text-black 4xs:p-2 sm:p-4 ">
                                    <AiOutlinePlus />
                                </div>

                                <div onClick={
                                    cart ? 
                                        () => {removeFromCart(product); handleCart(!cart) }      
                                    :
                                        () => {addToCart(product); handleCart(!cart)}
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
                                            () => {removeFromFavorites(product); handleFav(!fav) }      
                                        :
                                            () => {addToWishlist(product); handleFav(!fav)}
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
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center content-center justify-start mt-4 ">
                        <h1 className="mb-2 text-xl">{product.productName}</h1>
                        <div className="mb-4 text-base">${product.price}.00</div>
                    </div>
            </div>

            {modal ? 
                <>
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
                                        <div className="text-3xl flex mb-4">{product.productName}</div>
                                        <div className="text-2xl text-gray-400 mb-6 ">${product.price}</div>
                                        <div className="text-base mb-6">Availability: <span className="text-[green]">{product.availability}</span></div>
                                        <p className="flex text-lg mb-8 ">{product.description}</p>
                                        <div className="w-[80%] flex 4xs:flex-col sm:flex-row gap-4 justify-between 4xs:mb-8 sm:mb-0 ">
                                            {
                                                cartItem ? 
                                                
                                                <button className="py-2 4xs:w-[100%] sm:w-[40%] flex flex-row justify-evenly border-[1px] border-black " >
                                                    <span className="cursor-pointer">-</span>
                                                    <span>1</span>
                                                    <span className="cursor-pointer">+</span>
                                                </button>
                                                
                                                : ""
                                            }

                                            <button onClick={
                                                cart ? 
                                                        () => {removeFromCart(product); handleCart(!cart) }      
                                                    :
                                                        () => {addToCart(product); handleCart(!cart)}
                                                }
                                                style={{
                                                    backgroundColor: cart ? '#e92467' : '', 
                                                    color: cart ? "white" : '', 
                                                    borderColor: cart ? "transparent" : "",
                                                }} 
                                                className="4xs:w-[100%] sm:w-[40%] py-2 flex flex-wrap flex-row justify-center bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black  "
                                            >
                                                Add to Cart
                                            </button>

                                            <button 
                                                onClick={
                                                    fav ? 
                                                        () => {removeFromFavorites(product); handleFav(!fav) }      
                                                    :
                                                        () => {addToWishlist(product); handleFav(!fav)}
                                                } 
                                                style={{
                                                    backgroundColor: fav ? '#e92467' : '', 
                                                    color: fav ? "white" : '', 
                                                    borderColor: fav ? "transparent" : "",
                                                }} 
                                                className="4xs:w-[100%] sm:w-[10%] py-2 flex flex-row justify-center border-[1px] border-black hover:bg-black hover:text-white text-2xl "
                                            >
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
        </div>
    )
}

export default Product