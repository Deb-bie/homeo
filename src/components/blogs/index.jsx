import React from 'react'
import {Link} from "react-router-dom";

import BlogData from "../../data/blogData.js"

const Blogs = () => {

    const viewBlog = () => {
        console.log("view blog")
    }


  return (
    <div className="w-[100%] h-full flex mb-24 overflow-hidden ">
        <div className="w-[100%] h-full flex flex-col flex-nowrap justify-center content-center items-center " >
            <h1 className="flex text-4xl font-bold ">Our Blogs</h1>

            <div className="w-[80%] flex flex-col flex-nowrap  mt-8">
                <div className="flex justify-end content-center">
                    <Link to="#" className="hover:text-[red]" >See all</Link>
                </div>

                <div className="flex flex-row flex-wrap content-center items-center justify-between mt-8 gap-8">
                    
                    {BlogData.map((blog) => (
                        <div key={blog.id} onClick={() => viewBlog(blog.id)} className="  flex flex-col w-[300px] h-auto transform transition duration-500 hover:scale-90 cursor-pointer ">
                            <img src={blog.image} alt="blog" className="object-contain" />
                            
                            <h1 className="flex text-xl font-bold mt-8">{blog.title}</h1>
    
                            <p className="flex text-sm font-light text-gray-700 mt-4 ">{blog.date}</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs