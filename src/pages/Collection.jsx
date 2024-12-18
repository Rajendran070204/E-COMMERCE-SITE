import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { Shopcontext } from "../context/Shopcontext"
import { assets } from "../assets/assets"
import Title from '../components/Title';
import Productitem from '../components/Productitem'

const Collection = () => {
  const { products, search, showSearch } = useContext(Shopcontext);
  const [showfilter, setShowfilter] = useState(false);
  const [filterproduct,setFilterproduct] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const togglecategory =(e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const togglesubcategory =(e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyfilter = () => {

    let productscopy = products.slice();

    if (showSearch && search) {
      productscopy = productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productscopy = productscopy.filter(item => category.includes(item.category));
    } 
 
    if (subCategory.length > 0) {
      productscopy = productscopy.filter(item => subCategory.includes(item.subCategory));
    } 
 
    setFilterproduct(productscopy);

  }

  const sortproduct = () => {

    let fpcopy = filterproduct.slice();

    switch (sortType) {
      case 'low-high':
        setFilterproduct(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterproduct(fpcopy.sort((a,b)=>(b.price - a.price)));
        break;
    
      default:
        applyfilter()
        break;
    }
  }

  useEffect(()=>{
    applyfilter();
  },[category,subCategory, search, showSearch])

  useEffect(() => {
    sortproduct();
  },[sortType])

    return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filters option  */}
      <div className="min-w-60">
        <p className="my-2 flex items-center gap-2 text-xl cursor-pointer">FILTERS
          <img onClick={()=>setShowfilter(!showfilter)} src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className="font-medium text-sm mb-3">CATEGORIES</p>
          <div className="FLEX flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Men'} onChange={togglecategory} />Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Women'} onChange={togglecategory} />Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Kids'} onChange={togglecategory} />Kids
            </p>
          </div>
        </div>
        {/*  Succategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className="font-medium text-sm mb-3">TYPE</p>
          <div className="FLEX flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={togglesubcategory} />Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={togglesubcategory} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={togglesubcategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
         <Title text1={'ALL'} text2={'COLLECTION'} /> 
         {/* Product sort */}
         <select onChange={(e)=> setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
          <option value="relavent">Sort by: relavent</option>
          <option value="low-high">Sort by: Low to High </option>
          <option value="high-low">Sort by: High to Low</option>
         </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-4">
          {
            filterproduct.map((item,index)=>(
              <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
