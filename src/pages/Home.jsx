import React from 'react'
import Landing from '../components/Landing'
import Destination from '../components/Destination'
import About from './About'
import Blog from './Blog'

export default function Home() {
  return (
    <>
      <Landing />
      <Destination />    
      <About />
      <Blog />
    </>
  )
}
