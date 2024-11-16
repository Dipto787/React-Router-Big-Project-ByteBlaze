import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Hero from "./Hero";

 const Home = () => {
    return (
        <div className="">
            <div className=" h-16 ">
                <Navbar></Navbar>
            </div> 

          <div className=" min-h-[calc(100vh-117px)] ">
          <Outlet></Outlet>
          </div>
        
         
           <div className=" ">
           <Footer></Footer>
           </div>

        </div>
    );
};

export default Home;