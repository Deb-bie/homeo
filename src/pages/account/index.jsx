import { Link } from "react-router-dom";




const Account = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">
                <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start ">Account</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="w-[10%] flex justify-around sm:pr-0 pr-8 ">
                            <Link to="/">HOME</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500">ACCOUNT</h2>
                        </span>
                        
                    </span>
                </div>

                <div className="w-[100%] h-[100px] flex flex-row flex-wrap justify-center items-center content-center ">
                    <span className=" text-[10px]  2xs:text-base sm:text-xl w-[80%] sm:w-[70%] md:w-[40%] flex justify-between content-center items-center font-bold ">
                        <Link to="#" className="text-gray-500">ACCOUNT</Link>
                        <Link to="/updateaccount">UPDATE ACCOUNT</Link>
                    </span>
                </div>

                <div className="4xs:pl-4 md:pl-0 pb-32 w-[100%] h-full flex flex-col flex-wrap content-center ">
                    <div className="w-[90%] md:w-[30%] flex flex-col justify-end">
                        <h1 className=" flex text-[10px]  2xs:text-base sm:text-2xl font-bold mb-8">Your Account Details</h1>

                        <div className="flex flex-col">

                            <div className="flex flex-row content-center items-center mb-4">
                                <div className="flex  text-[10px]  2xs:text-base text-sm text-gray-400 font-black">USERNAME:</div>
                                <div className="flex text-[10px]  2xs:text-base text-lg">
                                    <pre> Debbie</pre>
                                </div>
                            </div>

                            <div className="flex flex-row content-center items-center mb-20">
                                <div className="flex text-[10px]  2xs:text-base text-sm text-gray-400 font-black">EMAIL:</div>
                                <div className="flex text-[10px]  2xs:text-base text-lg">
                                    <pre> a@a.com</pre>
                                </div>
                            </div>

                            <div className="flex flex-col 2xs:flex-row justify-between content-center items-center gap-4">
                                <button className="outline-none flex justify-center py-2 px-4 bg-[blue] transform transition duration-500 hover:border-[1px] hover:border-[blue] hover:bg-white hover:text-[blue] text-white rounded-[5px]">
                                    Update
                                </button>

                                <button className="outline-none flex justify-center py-2 px-4 bg-[red] transform transition duration-500 hover:border-[1px] hover:border-[red] hover:bg-white hover:text-[red] text-white rounded-[5px]">
                                    Delete
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;