import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {HiOutlineArrowLeft} from "react-icons/hi";
import { BsArrowRight } from 'react-icons/bs';


// import {HiOutlineArrowLeft} from 'react-icons/hi';

const CartItem = () => {
    const productData = useSelector((state) => state.bazar.productData);
    // console.log(productData);
    return (<div className="w-2/3 pr-10">
        <div className="w-full">
            <h2 className="font-titleFont text-2xl">Shopping cart</h2>
          </div>
            <div>
          
            {productData.map((item) => (
              <div key={item._id} className="flex items-center justify-between gap-6 mt-6">
                <div className="flex items-center justify-between gap-6 mt-6">
                  <MdOutlineClose className ="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 mx-50" />
                  <img className="w-32 h-32 object-cover" src={item.image} alt="" />
                </div>
                </div>
            ))
            }
        </div>
        </div>
    );
};

export default CartItem;