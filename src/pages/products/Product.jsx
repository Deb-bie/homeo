import {useState} from "react"
import {AiOutlinePlus} from "react-icons/ai"
import {IoCartOutline, IoHeartOutline, IoHeart, IoCart} from "react-icons/io5"
import {MdClose} from "react-icons/md"
import {FiExternalLink} from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import ProductModal from "./ProductModal"



const Product = ({
    product,
    addToCart, 
    removeFromCart, 
    addToWishlist, 
    removeFromFavorites, 
}) => {

    const navigate = useNavigate();

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
                        <h1 className="mb-2 text-xl">{product.name}</h1>
                        <div className="mb-4 text-base">${product.price}.00</div>
                    </div>
            </div>

            {modal ? 
                <ProductModal 
                    product={product}
                    modal={modal}
                    handleModal={handleModal}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    handleCart={handleCart}
                    addToCart={addToCart}
                    fav={fav}
                    removeFromFavorites={removeFromFavorites}
                    addToWishlist={addToWishlist}
                    handleFav={handleFav}

                />
            : null}
        </div>
    )
}

export default Product