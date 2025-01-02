import React from 'react'
import "./LandingStyles.css"

export default function Landing() {
  return (
    <>
     <div className="hero">
       <img alt = "HeroImg" className = "object-cover"src="https://i.pinimg.com/736x/a6/f8/a1/a6f8a14ab11c37683502d4364264bbc7.jpg"/>
       <div className="hero-text">
        <h1 className='text-6xl'>Africkson Safaris</h1>
        <p>A Home Away From Home</p>
        <a>Join Now</a>
       </div>
    </div>
    </>
  )
}
