import React from 'react'

const Newsletterbox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-800">Subscribe now & 20% off</p>
      <p className="mt-3 text-gray-8400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis eligendi sint sed aliquam. Iste, architecto!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 pl-3 border mx-auto my-6'>
        <input type="email" placeholder='Enter your Eamil' className='w-full sm:flex-1 outline-none' required />
        <button type="submit" className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Newsletterbox ;
