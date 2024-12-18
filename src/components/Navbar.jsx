import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';

const Navbar = () => {

  const [visible,setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(Shopcontext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/"><img src={assets.logo} className='w-36' alt="logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-grayu-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/About" className="flex flex-col gap-1 items-center">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Collection" className="flex flex-col gap-1 items-center">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col gap-1 items-center">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="search icon" className='w-5 cursor-pointer' />
        <div className="group relative">
          <Link to='/login'><img src={assets.profile_icon} alt="profile icon" className="w-5 cursor-pointer" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/Cart" className='relative'>
        <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
         <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden" />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
             <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
             <p>Back</p>
          </div>
            <NavLink onClick={()=>setVisible(false)} to="/" className="py-2 pl-6 border">HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/About" className="py-2 pl-6 border">ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/Collection" className="py-2 pl-6 border">COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} to="/Contact" className="py-2 pl-6 border">CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}


export default Navbar