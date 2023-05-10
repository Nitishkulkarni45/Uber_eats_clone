import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Maps from '../components/Maps'
import Lists from '../components/Lists'
import Footer from '../components/Footer'

                
const Home = () => {
  return (
    <>

<div
        style={{
          backgroundImage: 'url(https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/9b21aa66b4922ae2.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Your content goes here */}
        <Navbar />
      </div>
      <Cards />
<Maps/>
<Lists/>
<Footer />
    </>
  )
}

export default Home