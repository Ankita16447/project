import React from 'react';
// import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import cart from '../assets/cart.jpg';

const Cart = () => {
 
  return (
    <div>
      <img className = "w-full h-80 object cover" src = {cart} alt ="" />

      <div className = "max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className = "w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className = "text-2xl font-medium">cart totals</h2>
          <p className = 'flex item-center gap-4 text-base'>
            SubTotal{" "}
            <span className="font-titleFont font-bold text-lg">$ 200</span>
          </p>

          <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>Lorem ipsum dollar sit amet consectetur adipisicing elit,Quos veritatis.
            </span>
          </p>
        </div>
        <p className = "font-titleFont font-semibold flex justify-between mt-6">
        Total <span className="text-xl font-bold">$200</span>
        </p>

        <button className = "text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100">proceed to checkout</button>
      </div>
      </div>

     
      
    </div>
  )
}

export default Cart