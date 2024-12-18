import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import Carttotal from '../components/Carttotal';
import { assets } from "../assets/assets"
import { Shopcontext } from '../context/Shopcontext';
import StripeCheckout from 'react-stripe-checkout';


const Placeorder = () => {
  const [method, setMethod] = useState('stripe');
  // const {navigate} = useContext(Shopcontext);
  const { delivery_fee, getCartAmount } = useContext(Shopcontext)

  const totalAmount = getCartAmount() === 0 ? 0 :getCartAmount() + delivery_fee

const handleToken = (token)=>{
  console.log(token);
}

  return (
    <div className='flex flex-col sm:flex-row justify-center gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* lift side */}
      {/* <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />  
        </div>
        <div className="flex gap-3">
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Frist name' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='last name' />
        </div>
          <input type="email" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Email address' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Street' />
          <div className="flex gap-3">
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='City' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='State' />
        </div>
          <div className="flex gap-3">
          <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Zipcode' />
          <input type="text" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Country' />
        </div>
        <input type="number" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" placeholder='Phone' />
      </div> */}
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <Carttotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* payment method selection */}
          <div className="flex gap-3 flex-col sm:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="text-end mt-8 w-full">
          {/* onClick={()=>navigate('/order')} */}
          <StripeCheckout
            token={handleToken}
            name='PRODUCTS'
            currency='Inr'
            amount={totalAmount*100}
            stripeKey='pk_test_51QTemhHb9TsoesV4T3tc8i1iBNWS8W3V1Sy5oORJrZ6UphPXJwylZWJ0dmP9qaj59IVU8p5WuiQfHB9q5sUacF2F00D24Qj8mf'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder
