import { Link } from "react-router-dom";




const Login = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-full flex flex-col flex-nowrap content-center items-start ">
                <div className=" p-12 w-[100%] h-[150px] bg-gray-800 text-white flex flex-col flex-nowrap ">
                    <h1 className="w-[100%] text-4xl font-semibold flex justify-start items-start ">Login</h1>
                    <span className="w-[100%] text-base font-[300] flex flex-row justify-end ">
                        <span className="w-[10%] flex justify-around  ">
                            <Link to="/">HOME</Link>
                            &nbsp;
                            <h2>/</h2>
                            &nbsp;
                            <h2 className="text-gray-500">LOGIN</h2>
                        </span>
                        
                    </span>
                </div>

                <div className="w-[100%] h-[100px] flex flex-row flex-wrap justify-center items-center content-center ">
                    <span className="w-[80%] sm:w-[50%] md:w-[20%] flex justify-between font-bold text-xl">
                        <Link to="#" className="text-gray-500">LOGIN</Link>
                        <Link to="/register">REGISTER</Link>
                    </span>
                </div>

                <div className="4xs:pl-4 md:pl-0 pb-32 w-[100%] h-full flex flex-col flex-wrap content-center ">
                    <div className="w-[90%] md:w-[30%] flex flex-col justify-end">
                        <h1 className=" flex text-2xl font-bold mb-8">Log into your account</h1>

                        <div className="flex flex-col">
                            <input
                                type="text"
                                placeholder="Username or Email"
                                required
                                className="px-4 py-2 outline-none mb-4 border-[1px] border-black rounded-[5px]"
                            />

                            <input
                                type="text"
                                placeholder="Password"
                                required
                                className="px-4 py-2 outline-none mb-6 border-[1px] border-black rounded-[5px]"
                            />

                            <div className="mb-8 flex flex-row justify-between text-base ">
                                <span>
                                    <input  
                                        type="checkbox"
                                    />
                                    <label>Remember me</label>
                                </span>

                                <Link to="#">Forgot password?</Link>

                            </div>

                            <button className="outline-none flex justify-center  py-2 px-4 bg-black text-white rounded-[5px]">
                                Login 
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;