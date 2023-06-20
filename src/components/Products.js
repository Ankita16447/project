import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <div className ="py-10">
      <div className ="flex flex-col items-center gap-4">
        <h1 className ="text- 2xl bg-black text-white py-2 w-80 text-center">Shopping Everyday</h1>
        <span className ="w-20 h-[3px] bg-black"></span> 
        <p className ="max-w-[700px] text-gray-600 text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur similique a deleniti culpa sequi officiis, quam dolorem obcaecati porro illo tempore soluta possimus harum fuga animi veritatis expedita fugiat!</p>
        </div>
        <div className ="max-w-screen-xl mx-auto">
          <ProductsCard/>
        </div>
    </div>
  )
}

export default Products

