import React, { useState} from 'react';
import {HiArrowRight,HiArrowLeft} from "react-icons/hi";

const Banner = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7679877/pexels-photo-7679877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://media.istockphoto.com/id/670741276/photo/two-cheerful-girls-shopping-for-clothes.jpg?s=612x612&w=0&k=20&c=g0DHKMlCY2Z0X_21iK5jo__32ySY2JoHANWIZQO7yTw=",
    "https://www.istockphoto.com/en/photo/two-cheerful-girls-shopping-for-clothes-gm670741276-122706277?phrase=shopping%20girls",
    "https://i.pinimg.com/736x/b0/38/9d/b0389dc1517a1502113922dcf49b2add.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/ZTaRgBjpMLKbObQu_sFFeUwhnhA/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2015/06/02/906/n/1922507/55d3c707_edit_img_facebook_post_image_file_16516765_1433277629.png"

  ];

  const prevSlide=() =>
  {
    setCurrentSlide(currentSlide === 0 ? 3:(prev)=> prev-1)

  };
  const nextSlide=() =>
  {
    setCurrentSlide(currentSlide === 3 ? 0:(prev)=> prev+1)

  };

  
    return ( <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen h-[650px] relative">
            <div 
            style = {{tranform:`translateX(-${currentSlide * 100}vw)` }}
            className = "w-[400vw] h-full flex transition-transform duration-1000">
                <img className = "w-screen h-full object-cover" src={data[0]} alt="imag1" loading="priority" />
                <img className = "w-screen h-full object-cover" src={data[1]} alt="imag2" />
                <img className = "w-screen h-full object-cover" src={data[2]} alt="imag3" />
                <img className = "w-screen h-full object-cover" src={data[3]} alt="imag4" />

            </div>

            <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                <div onClick = {prevSlide} className="w-14 h-12 border-[2px] border-black-700 flex items-center justify-center
                 hover:cursor-pointer hover:bg-white-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowLeft />
                </div>
                <div onClick = {nextSlide} className="w-14 h-12 border-[2px] border-black-700 flex items-center justify-center
                 hover:cursor-pointer hover:bg-white-700 hover:text-white active:bg-black-900 duration-300">
                    <HiArrowRight />
                </div>

            </div>
        
        </div>
    </div>
    );
}

export default Banner
