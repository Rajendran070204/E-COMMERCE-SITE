import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(Shopcontext)
    const [visible,setVisible] = useState(false);
    const location = useLocation();
    
    useEffect(()=>{
        if (location.pathname.includes('Collection')  ) {
            setVisible(true);
        }
        else{
            setVisible(false);
        }
    },[location])

    return showSearch && visible ? (
        <div className='border-t borde-b bg-gray-50 text-center'>
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className="flex-1 text-sm bg-inherit outline-none" />
                <img src={assets.search_icon} alt="search" className="w-4" />
            </div>
            <img  onClick={() => setShowSearch(false)}  src={assets.cross_icon} alt="" className="inline w-3 cursor-pointer" />
        </div>
    ) : null
}

export default Searchbar
