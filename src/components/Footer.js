import React from 'react'
import {left_logo , paymentlogo} from "../assets/index";
import {ImGithub} from "react-icons/im"
import {FaFacebookF,FaTwitter , FaInstagram , FaYoutube , FaHome , } from "react-icons/fa" ; 
import { MdLocationOn} from "react-icons/md" ; 
import { BsPersonFill , BsPaypal} from "react-icons/bs" ; 


const Footer = () => {
  return (
    <div className ="bg-black text-[949494] py-20 font-titleFont">
      <div className ="max-w-screen-xl mx-auto grid grid-cols-4">
       <div>
       <img className="w-30 h-12 px-12 " src={left_logo} alt="logo"/>
       <br></br>
       <p className =" text-white text-sm tracking-wide px-12 ">Ⓒ Fashion.com</p>
       <br></br>
       <img className ="w-56 px-12 " src={paymentlogo} alt ="paymentLogo"/>
       <br></br>
       <div className ="flex gap-5 text-lg text-gray-400">
          <ImGithub className ="hover:text-white duration 300 cursor-pointer px-3"/>
          <FaYoutube className ="hover:text-white duration 300 cursor-pointer"/><FaFacebookF className ="hover:text-white duration 300 cursor-pointer"/><FaTwitter className ="hover:text-white duration 300 cursor-pointer"/><FaInstagram className ="hover:text-white duration 300 cursor-pointer"/>
       </div>
       </div>
       <div className = "text-gray-400">
       <h2 className="text-2xl font-semibold text-white mb-4"> Locate Us</h2> 
       <div className=" text-base flex flex-col gap-2">
        <p>plot number24 , industrial Area Chandigarh</p>
        <p>Mobile - 8753426869</p>
        <p>phone - 0172897454</p>
        <p>email-fashinstyles@gmail.com</p>
       </div>
       </div>
       <div className = "text-gray-400">
        <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
        <div className = "flex flex-col gap-2 text-base">
        <p className = "flex items gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPersonFill/></span>my account</p>
        <p className = "flex items gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPaypal/></span>my profile</p> 
        <p className = "flex items gap-3 hover:text-white duration-300 cursor-pointer"><span><FaHome/></span>Order Tracking</p>
        <p className = "flex items gap-3 hover:text-white duration-300 cursor-pointer"><span><MdLocationOn/></span>help and support</p>
        </div>
        
       </div> 
       <div className="flex flex-col justify-center px-2">
        <input className = "bg-transparent border px-4 py-2 text-sm"  placeholder="email"   type="text"></input> 
        <button className=" text-sm-border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black"> Subscribe </button>
       </div>
      </div>
    </div>
  )
}

export default Footer
