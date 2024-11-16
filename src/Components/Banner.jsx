import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero   ">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">Welcome to ByteBlaze
                        </h1>
                        <p className="py-6">
                            ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
                        </p>
                        <div>
                            <NavLink  className="relative mr-5 inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Read Blogs</span>
                            </NavLink>

                            <NavLink  className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">BookMarks</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;