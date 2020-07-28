import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Publicationheader.css'


class PublicationHeader extends Component {
  render(){
    return(
      <div className="header">
          <div className="imgContainer">
              <i className="fa fa-cloud-upload"></i>
          </div>
          <h2>drag and drop your image here</h2>
          <p>or</p>
          <div><Link to="#" className="btn">browse files</Link></div>
      </div>
    )
  }  
}

export default PublicationHeader