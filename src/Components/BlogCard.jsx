import { NavLink } from "react-router-dom";
import undefindImage from '../assets/404.jpg'

const BlogCard = ({ cardInfo }) => {
    let {cover_image,description,title,published_at}=cardInfo;
    return (
        <div className=" border-2 border-opacity-30  hover:border-secondary transition hover:scale-105 p-2 border-primary "> 
                    
                    
                        <NavLink   className=" mx-auto max-w-sm group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image||undefindImage} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                                <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                                <p> {description}</p>
                            </div>
                        </NavLink>  
                     
            
        </div>
    );
};

export default BlogCard;