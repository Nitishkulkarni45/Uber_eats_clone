import React from 'react'
import './App.css';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Pagelayout from '../components/Pagelayout';
import Maps from '../components/Maps';
import Lists from '../components/Lists';
import Foothead from '../components/Foothead';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
<div className='maan' style={{minHeight:'100vh'}}>
      <Navbar />
      <Pagelayout />
      </div>
      <Cards />
      <Maps />
      <Lists />
      <Foothead />
      <Footer />
    </>
  )
}

export default Home