import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-7xl font-bold leading-none sm:text-5xl">Welcome to ByteBlaze
                    </h1>
                    <p className=" mt-8 mb-12 text-lg">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it

                    </p>
                    <div className="flex flex-wrap justify-center">
                        <NavLink className="relative mr-5 inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Read Blogs</span>
                        </NavLink>
                        
                        <NavLink className="relative  inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Bookmarks</span>
                        </NavLink>
                        
                         
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;