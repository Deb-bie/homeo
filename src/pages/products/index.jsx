import React, {useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios"
import {Link} from "react-router-dom";
import Product from "./Product.jsx"
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"


import "./products.css"
import ProductSkeleton from "./ProductSkeleton.jsx";


const Products = ({
    cartItem, 
    addToCart, 
    addToWishlist, 
    increaseProductQuantity, 
    decreaseProductQuantity, 
    removeFromFavorites, 
    removeFromCart
}) => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState(false)
    const [categories, setCategories] = useState(false);
    const [availability, setAvailability] = useState(false);
    const [price, setPrice] = useState(false);

    const [loading, setLoading] = useState(true)



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

    const url = `api/products`

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await axios.get(url)
            setProducts(results.data)
            setLoading(false)
        };
        fetchProducts()
    }, [products, url])



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
                            filter &nbsp; &nbsp;
                            { filter ? <MdClose /> : <FaBars /> }
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
                                                value="beds"
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
                            
                            <div className="w-[90%] flex flex-row flex-wrap justify-evenly items-start content-start gap-8 md:mt-0 mt-12">

                                {
                                    loading 
                                    
                                    ? <ProductSkeleton />
                                    
                                    : products.map((product, id) => (
                                        <Product 
                                            key={id} 
                                            product={product} 
                                            addToCart={addToCart} 
                                            removeFromCart={removeFromCart} 
                                            addToWishlist={addToWishlist} 
                                            removeFromFavorites={removeFromFavorites}
                                            cartItem={cartItem}
                                            increaseProductQuantity={increaseProductQuantity}
                                            decreaseProductQuantity={decreaseProductQuantity}
                                        />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;