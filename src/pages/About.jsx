import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../components/Newsletterbox'

const About = () => {
  return (
    <div>
      
<div className="text-2xl text-center pt-8 border-t">
  <Title text1={'ABOUT'} text2={'US'} />
</div>

<div className="my-10 flex flex-col md:flex-row gap-16">
  <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit sapiente earum maxime dolor quo officiis molestiae odio officia rem, blanditiis praesentium hic repudiandae nulla cupiditate, fugiat, pariatur ducimus corporis?</p>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, dolore hic? Aspernatur ex exercitationem magni veritatis excepturi animi, id quod unde, molestiae nulla laborum suscipit, rerum consequuntur facilis soluta beatae. Consequatur, praesentium. Iure, minus libero!</p>
  <b className="text-gray-800">Our Mission</b>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae eius ad dolorem, et harum recusandae earum est ea eum!</p>
  </div>
</div>
<div className="text-4xl py-4">
  <Title text1={'WHY'} text2={'CHOOSE US'} />
</div>
<div className="flex flex-col md:flex-row text-sm mb-20">
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim sed quas aliquid illo dolorem, tempore itaque. Eos, rerum asperiores!</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim sed quas aliquid illo dolorem, tempore itaque. Eos, rerum asperiores!</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim sed quas aliquid illo dolorem, tempore itaque. Eos, rerum asperiores!</p>
  </div>
</div>
<Newsletterbox />
    </div>
  )
}

export default About
