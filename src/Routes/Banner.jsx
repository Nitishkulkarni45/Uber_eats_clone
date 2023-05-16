import React from 'react'
import Navbar from '../components/Navbar'
import Pagelayout from '../components/Pagelayout'

const Banner = () => {
  return (
    <div style={{minHeight:'100vh'}}>
        <Navbar/>
        <div className='d-flex align-items-center' style={{minHeight:'60vh'}}>
            <Pagelayout/>
        </div>
    </div>
  )
}

export default Banner