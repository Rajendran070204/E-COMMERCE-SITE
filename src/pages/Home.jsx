import React from 'react'
import Homepage from '../components/Homepage'
import Latestcollection from '../components/Latestcollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletterbox from '../components/Newsletterbox'

const Home = () => {
  return (
    <div>
      <Homepage/>
      <Latestcollection/>
      <Bestseller/>
      <Ourpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home
