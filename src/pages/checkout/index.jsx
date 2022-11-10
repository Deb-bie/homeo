import React from "react"
import {Link} from "react-router-dom"



const Checkout = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">

                <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap overflow-hidden ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Checkout</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="w-[10%] flex justify-around sm:pr-0 pr-8 ">
                            <Link to="/">HOME</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500">CHECKOUT</h2>
                        </span>
                    </span>
                </div>

                <div className="gap-32 px-8 my-24 w-[100%] h-full flex 4xs:flex-col sm:flex-row justify-between items-start content-center overflow-hidden">

                    <div className="4 4xs:pl- sm:pl-8 4xs:w-[100%] sm:w-[55%] flex flex-col ">

                        <h1 className="mb-8 flex text-xl font-[600]">Billing Details</h1>

                        <form>
                            <label className="mb-2 flex text-xl font-[500] text-gray-600 ">First Name</label>
                            <input 
                                required 
                                type="text" 
                                name="first_name" 
                                placeholder="eg. John"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />

                            
                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Last Name</label>
                            <input 
                                required 
                                type="text" 
                                name="last_name" 
                                placeholder="eg. Peterson"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />

                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Email</label>
                            <input 
                                required 
                                type="email" 
                                name="email" 
                                placeholder="eg. example@example.com"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />

                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Phone</label>
                            <input 
                                required 
                                type="number" 
                                name="phone" 
                                placeholder="eg. 0000 0000 0000"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />

                            
                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Country</label>
                            <input 
                                required 
                                type="text" 
                                name="country" 
                                placeholder="eg. USA"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />


                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">State</label>
                            <input 
                                required 
                                type="text" 
                                name="state" 
                                placeholder="eg. John"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />

                            <label className="mb-2 mt-12 flex text-xl font-[500] text-gray-600 ">Street Address</label>
                            <input 
                                required 
                                type="text" 
                                name="street" 
                                placeholder="eg. Bronx Street"
                                className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] " />
                        </form>
                        
                    </div>


                    <div className="4xs:w-[100%] sm:w-[35%] flex flex-col ">

                        <h1 className="mb-8 flex text-xl font-[600]">Your Order</h1>

                        <div className="w-[100%] pb-8 py-4 px-8 border-[1px] flex flex-col">
                            <form>
                                <label className="mb-4 mt-4 flex text-xl font-[500] text-gray-600 ">
                                    If you have a coupon code, please apply it below
                                </label>
                                <input  
                                    type="text" 
                                    name="coupon" 
                                    placeholder="Coupon code"
                                    className="py-2 px-4 w-[100%] outline-none border-[1px] border-black rounded-[5px] "  />
                                
                                <button className="mt-8 flex flex-row justify-center py-2 px-4 w-[60%] bg-black text-white">Apply</button>
                            </form>
                        </div>


                        <div className="my-12 w-[100%] pb-8 py-4 px-8 bg-gray-300 text-black flex flex-col 4xs:text-[10px] xs:text-base overflow-hidden ">
                            <div className="flex flex-row justify-between content-center items-center w-[100%] px-4 py-2 border-[1px] border-x-transparent border-t-transparent border-b-black overflow-hidden ">
                                <div className="flex" >Product</div>

                                <div className="flex" >Price</div>
                            </div>

                            <div className="mt-8 w-[100%] flex flex-row justify-between border-[1px] border-x-transparent border-t-transparent border-b-black ">
                                <div className=" w-[50%] flex overflow-hidden">
                                    <span className=" w-[100%] flex flex-row flex-wrap justify-between">
                                        <span className="flex">Homeo</span>

                                        <span className="flex">
                                            <pre>X  1</pre>
                                        </span>
                                    </span>
                                </div>

                                <div className="flex">$100</div>
                            </div>

                            <div className="mt-8 w-[100%] flex flex-row justify-between border-[1px] border-x-transparent border-t-transparent border-b-black ">
                                <div className=" w-[50%] flex overflow-hidden">
                                    <span className=" w-[100%] flex flex-row flex-wrap justify-between">
                                        <span className="flex">Homeo</span>

                                        <span className="flex">
                                            <pre>X  1</pre>
                                        </span>
                                    </span>
                                </div>

                                <div className="flex">$100</div>
                            </div>

                            <div className="mt-8 w-[100%] flex flex-row justify-between border-[1px] border-x-transparent border-t-transparent border-b-black ">
                                <div className=" w-[50%] flex overflow-hidden">
                                    <span className=" w-[100%] flex flex-row flex-wrap justify-between">
                                        <span className="flex">Homeo</span>

                                        <span className="flex">
                                            <pre>X  1</pre>
                                        </span>
                                    </span>
                                </div>

                                <div className="flex">$100</div>
                            </div>


                            <div className="mt-8 w-[100%] flex flex-row flex-wrap justify-between content-center items-center border-[1px] border-x-transparent border-t-transparent border-b-black ">
                                <div className=" w-[50%] flex font-black text-base overflow-hidden">
                                    Subtotal
                                </div>

                                <div className="flex">$100</div>
                            </div>

                            <div className="mt-8 w-[100%] flex flex-row flex-wrap justify-between content-center items-center border-[1px] border-x-transparent border-t-transparent border-b-black ">
                                <div className=" w-[50%] flex font-black text-base sm:text-xl overflow-hidden">
                                    Total
                                </div>

                                <div className="flex text-[red] font-black text-lg sm:text-2xl">$100</div>
                            </div>

                        </div>

                        
                        <div className="flex my-8">
                            <button className="bg-black text-white w-[100%] py-2 flex flex-row justify-center rounded-[3px] ">Place Order</button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;