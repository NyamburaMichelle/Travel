import React from 'react'
import DestinationData from './DestinationData'

export default function Destination() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h1 className='text-center text-white'>Popular Destinations</h1>
        <div className='flex justify-center'>      
        <DestinationData  
          image="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"
          heading="Africa"
          name="Discover Africa's hidden gems"
        />        
        </div> 
    </div>
  )
}
