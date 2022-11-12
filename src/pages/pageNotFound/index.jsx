import React from "react"
import {Link} from "react-router-dom"


const PageNotFound = () => {
    return (
        <div className="w-[100%] h-full flex overflow-hidden ">
            <div className="w-[100%] h-[50vh] flex flex-col justify-center content-center items-center px-8 ">
                <h1 className="flex justify-center text-5xl font-bold mb-6">ohh! page not found</h1>
                <p className=" text-xl">
                    It seems we can't find what you're looking for. Click to go back to the &nbsp;
                    <span><Link to="/" className="text-blue-900 underline">home page</Link></span>
                </p>
            </div>
        </div>
    )
}

export default  PageNotFound