import React from 'react'
import {left_logo} from "../assets/index"
import {cart_logo} from "../assets/index"
import {user_logo} from "../assets/index"



const Header = () => {
  return (
  <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">

    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
                <img className="w-30 h-12" src={left_logo} alt="logo"/>
            </div>
            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-black hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                </li>

                <li className="text-base text-black  hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Pages
                </li>

                <li className="text-base text-black hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Shop
                </li>

                <li className="text-base text-black  hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Elements
                </li>

                <li className="text-base text-black  hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Blog
                </li>

            </ul>

            <div>
                <img className="w-10" src={cart_logo}  alt="" />
            </div>

            <img className ="w-8 h-8 rounded-full" src={user_logo} alt="userlogo" />
            
        </div>     
    </div>
  </div>
  );
  
};

export default Header
