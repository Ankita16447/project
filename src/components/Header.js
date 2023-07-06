import React from 'react'
import {left_logo} from "../assets/index"
import {cart_logo} from "../assets/index"
import {user_logo} from "../assets/index"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => 
{
    const productData = useSelector((state)=> state.bazar.productData);
    console.log(productData);
  return (
  <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">

    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <Link to ="/">
            <div>
                <img className="w-30 h-12" src={left_logo} alt="logo"/>
            </div></Link>
            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <li className="text-base text-black hover:text-orange-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <Link to ="/">Home</Link>
                </li>

                <li className="text-base text-black  hover:text-black-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <Link to="/about">About</Link>
                </li>

                <li className="text-base text-black hover:text-black-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <Link to="/shop">Shop</Link>
                </li>

                <li className="text-base text-black  hover:text-black-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <Link to="/contact">Contact</Link>
                </li>

                {/* <li className="text-base text-black  hover:text-black-900 hover:underline
                underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    <Link to="/blog">Blog</Link>
                </li> */}

            </ul>

            <Link to="/cart">
            <div className='relative'>
                <img className="w-10" src={cart_logo}  alt="" />
                <span className = "absolute w-6 top-1 left-3 text-sm flex items-center justify-center">
                    {productData.length}
                </span>
            </div>
            </Link>

           <Link to="/Login2">
           <img className ="w-8 h-8 rounded-full" src={user_logo} alt="userlogo" />
           </Link>
            
        </div>     
    </div>

   
  </div>
  );
  
};

export default Header
