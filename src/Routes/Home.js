import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
// import Pagelayout from '../components/Pagelayout'
import Maps from '../components/Maps'
import Lists from '../components/Lists'
import Footer from '../components/Footer'

                
const Home = () => {
  return (
    <>
<Navbar />
<Cards />
<Maps/>
<Lists/>
<Footer />
    </>
  )
}

export default Home