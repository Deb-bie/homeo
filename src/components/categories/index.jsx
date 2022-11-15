// import {useState} from "react";
// import {useNavigate} from "react-router-dom";

import "./categories.css";

import CategoryData from "../../data/categoriesData.js"

const Categories = () => {
    // const navigate = useNavigate()

    const handleView = (category) => {
        // navigate("/")
        console.log(category)
    }


    return (

        <div className="w-[100%] h-full p-8 flex flex-col flex-nowrap overflow-hidden ">
            <div className="w-full flex flex-col justify-center content-center items-center">
                
                <div className="cat-heading font-black text-3xl text-center inline-block relative">
                    Categories
                </div>

                <div className="w-[90%] flex flex-row flex-wrap justify-evenly items-center content-center mt-12 gap-8">

                    {CategoryData.map((item, i) => (
                        <div key={i} className="card flex justify-center items-center content-center 4xs:h-[100px] md:h-auto 4xs:w-[100px] md:w-[280px] bg-orange-600 transform transition duration-500 ease-out hover:scale-90 hover:before:opacity-100 cursor-pointer ">
                            <img src={item.blob} alt="blob" className="absolute w-screen sm:w-[300px] h-[200px] object-contain rounded-[15px] top-0 left-0  " />

                            <img src={item.image} alt="category" className="absolute w-[300px] h-[200px] object-contain rounded-[15px] top-0 left-0" />

                            <div className="info">
                                <h1>{item.category}</h1>
                                <button onClick={() => handleView(item.category)}  >View More</button>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </div>


    )
}


export default Categories;