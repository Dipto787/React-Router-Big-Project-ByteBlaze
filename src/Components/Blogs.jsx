import { NavLink, useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";


const Blogs = () => {
    let blogCardData = useLoaderData();
    return (
        <div className="container py-6 max-w-6xl mx-auto">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <NavLink rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={blogCardData[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogCardData[0].title}</h3>
                            <span className="text-xs dark:text-gray-600">{new Date(blogCardData[0].published_at).toLocaleDateString()}</span>
                            <p>{blogCardData[0].description}</p>
                        </div>
                    </NavLink>
                     
                </div>
            </section>
           <div className="grid md:grid-cols-3 justify-center items-center px-6  gap-5  ">
           {
                blogCardData.slice(1,blogCardData.length).map(cardInfo => <BlogCard cardInfo={cardInfo} key={cardInfo.id}></BlogCard>)
            }
           </div> 
        </div>
    );
};

export default Blogs;