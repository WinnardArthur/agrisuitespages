import React from 'react'
import './polygon.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import $ from 'jquery'


/**
* @author
* @function Polygons
**/

const Polygons = (props) => {
  return(
        <div className="polygons-wrapper">
            {/* <h5>display of information from other platforms</h5> */}
            <div className="polygons">
                <OwlCarousel className="owl-theme items"
                items= "5"
                autoplay
                loop
                >
                    <div className="item type1">
                        <img src={require("../../assets/images/images/seediling.jpg")} alt="polygon-image"/>
                    </div>
                    <div className="item type2">
                        <img src={require("../../assets/images/images/seediling.jpg")} alt="polygon-image"/>
                    </div>
                    <div className="item type2">
                        <img src={require("../../assets/images/images/orange.jpeg")} alt="polygon-image"/>
                    </div>
                    <div className="item type2">
                        <img src={require("../../assets/images/images/tech-sample.jpg")} alt="polygon-image"/>
                    </div>
                    <div className="item type3">
                        <img src={require("../../assets/images/images/tech-sample2.jpg")} alt="polygon-image"/>
                    </div>
                </OwlCarousel>
            </div>
        </div>
   )

 }

export default Polygons