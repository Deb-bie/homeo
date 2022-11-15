import { Link } from "react-router-dom";



const UpdateAccount = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">
                <div className=" p-4 sm:p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap ">
                    <h1 className="w-[100%] text-xl sm:text-4xl font-semibold flex justify-start items-start mb-4 ">Update Account</h1>
                    <span className="w-[100%] h-[100%] 4xs:text-[8px] 3xs:text-[12px] sm:text-base font-[300] flex flex-row justify-end ">
                        <span className="w-[100%] 2xs:w-[55%] sm:w-[40%] md:w-[35%] lg:w-[25%]  flex content-center items-center justify-evenly sm:justify-around ">
                            <Link to="/">HOME</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500  ">UPDATE ACCOUNT</h2>
                        </span>
                        
                    </span>
                </div>

                <div className="w-[100%] h-[100px] flex flex-row flex-wrap justify-center items-center content-center ">
                    <span className=" text-[10px]  2xs:text-base sm:text-xl w-[80%] sm:w-[70%] md:w-[40%] flex justify-between content-center items-center font-bold ">
                        <Link to="/update" >ACCOUNT</Link>
                        <Link to="#" className="text-gray-500">UPDATE ACCOUNT</Link>
                    </span>
                </div>

                <div className="4xs:pl-4 md:pl-0 pb-32 w-[100%] h-full flex flex-col flex-wrap content-center ">
                    <div className="w-[90%] md:w-[30%] flex flex-col justify-end">
                        <h1 className=" flex text-2xl font-bold mb-8">Update Account Details</h1>

                        <div className="flex flex-col">
                            <label className="text-gray-400 text-base ">Username:</label>
                            <input
                                type="text"
                                placeholder="Username"
                                required
                                className="px-4 py-2 outline-none mb-6 border-[1px] border-black rounded-[5px]"
                            />

                            <label className="text-gray-400 text-base ">Email:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="px-4 py-2 outline-none mb-12 border-[1px] border-black rounded-[5px]"
                            />

                            <button className="outline-none flex justify-center  py-2 px-4 bg-black text-white rounded-[5px]">
                                Save
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateAccount;