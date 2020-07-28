import React from 'react'
import GreenBar from '../Green-bar/green-bar'
import './hero.css'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div className="hero-section">
        <h2 className="category">Scientific Research</h2>
        <GreenBar/>
        <div className="imgContainer">
            <img src={require('../../assets/images/BACKGROUND_SHAPES_WEBSITES/Analysis.png')} alt="hero image"/>
        </div>
    </div>
   )
}

export default Hero