import { useEffect, useState } from "react";
import { getBlogOnLocalStorage, handleDeleteBookMark } from "./BookmarkStored";
import BlogCard from "./BlogCard";

 const Bookmarks = () => {
    let [blog,setBlog]=useState([]);
    useEffect(()=>{
        let blogMaster=getBlogOnLocalStorage();
        setBlog(blogMaster); 
    },[])
    let handleDeleteblogs=(id)=>{
        handleDeleteBookMark(id);
        let blogMaster=getBlogOnLocalStorage();
        setBlog(blogMaster)
    }
    return (
        <div className="grid grid-cols-3 py-5  px-20 gap-8">
           {
            blog.map(blogs=><BlogCard handleDeleteblogs={handleDeleteblogs} onlyBookmark={true} cardInfo={blogs}></BlogCard>)
           }
        </div>
    );
};

export default Bookmarks;