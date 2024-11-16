 import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    let [theme,setTheme]=useState('light');
    useEffect(()=>{
        localStorage.setItem('theme',theme);
        let getTheme=localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-Theme',getTheme)
    },[theme])
   let handleTheme=e=>{ 
    console.log(e.target.checked)
    if(e.target.checked){
        setTheme('dark')
    }else{
        setTheme('light')
    }
   }
    return (
        <div>
            <div className="navbar fixed shadow-xl z-10  px-4 sm:px-8 bg-base-100">
                <div className="flex-1">
                    <a className="btn gap-0 btn-ghost text-3xl"><span className="text-secondary">Byte</span ><span className="text-primary">Blaze</span></a>
                </div>
                <div className="md:flex flex-none hidden">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/' className={({isActive})=> isActive?'text-primary font-bold':'font-bold'}><li  className="font-bold"><a>Home</a></li> </NavLink>
                        <NavLink to='/blogs' className={({isActive})=> isActive?'text-primary  font-bold':' font-bold'}><li  ><a>Blogs</a></li> </NavLink>
                        <NavLink to='/bookmarks' className={({isActive})=> isActive?'text-primary  font-bold':' font-bold'}><li ><a>BookMarks</a></li> </NavLink>
                    </ul>
                </div>
                <label  className="grid cursor-pointer place-items-center">
                    <input onClick={handleTheme}
                        type="checkbox" 
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;