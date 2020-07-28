import React from 'react'
import './title.css'

/**
* @author
* @function Title
**/

const Title = (props) => {
  return(
    <div className="titleSection">
        <div className="title">
            <h2>Blog Title</h2>
        </div>
        <div className="ShareSection">
            <h4>Share</h4>
            <div className="ShareBar">
                <a href="#"><i className="fa fa-facebook icon" ></i></a>
                <a href="#"><i className="fa fa-twitter icon"></i></a>
                <a href="#"><i className="fa fa-linkedin icon"></i></a>
                <a href="#"><i className="fa fa-pinterest icon"></i></a>

            </div>
        </div>
    </div>
   )

 }

export default Title