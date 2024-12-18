import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from "../context/Shopcontext"
import Title from './Title';
import Productitem from "./Productitem";

const Bestseller = () => {
    const { products } = useContext(Shopcontext);
    const [bestseller,setBestseller] = useState([]);

    useEffect(()=>{
        const bestproduct = products.filter((item)=>(item.bestseller));
        setBestseller(bestproduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit sed consequuntur officia repellat architecto.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestseller.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default Bestseller
